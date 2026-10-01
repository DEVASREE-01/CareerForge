/**
 * In-memory sliding-window rate limiting middleware
 */

export function createRateLimiter({
  windowMs = 15 * 60 * 1000,
  max = 20,
  message = 'Too many requests, please try again later.',
  keyGenerator = req => req.ip || req.headers['x-forwarded-for'] || 'client'
}) {
  const store = new Map();

  // Periodic cleanup every 5 minutes
  setInterval(() => {
    const now = Date.now();
    for (const [key, timestamps] of store.entries()) {
      const valid = timestamps.filter(t => now - t < windowMs);
      if (valid.length === 0) store.delete(key);
      else store.set(key, valid);
    }
  }, 5 * 60 * 1000).unref();

  return (req, res, next) => {
    const key = keyGenerator(req);
    const now = Date.now();
    const timestamps = (store.get(key) || []).filter(t => now - t < windowMs);

    if (timestamps.length >= max) {
      const oldest = timestamps[0];
      const retryAfterMs = windowMs - (now - oldest);
      const retryAfterSeconds = Math.ceil(retryAfterMs / 1000);

      res.setHeader('Retry-After', retryAfterSeconds);
      return res.status(429).json({
        message,
        retryAfterSeconds
      });
    }

    timestamps.push(now);
    store.set(key, timestamps);
    next();
  };
}

// 5 failed login attempts per 5 minutes per IP+Email
export const loginRateLimiter = createRateLimiter({
  windowMs: Number.parseInt(process.env.AUTH_RATE_LIMIT_LOGIN_WINDOW_MIN || '5', 10) * 60 * 1000,
  max: Number.parseInt(process.env.AUTH_RATE_LIMIT_LOGIN_MAX || '10', 10),
  message: 'Too many login attempts. Please wait 5 minutes before trying again.',
  keyGenerator: req => `login:${req.ip}:${(req.body?.email || '').toLowerCase().trim()}`
});

// Max 8 registrations per 15 minutes per IP
export const registerRateLimiter = createRateLimiter({
  windowMs: Number.parseInt(process.env.AUTH_RATE_LIMIT_REGISTER_WINDOW_MIN || '15', 10) * 60 * 1000,
  max: Number.parseInt(process.env.AUTH_RATE_LIMIT_REGISTER_MAX || '8', 10),
  message: 'Too many registration requests from this network. Please try again later.',
  keyGenerator: req => `reg:${req.ip}`
});

// Max 4 OTP resend requests per 10 minutes per email
export const otpRequestRateLimiter = createRateLimiter({
  windowMs: Number.parseInt(process.env.AUTH_RATE_LIMIT_OTP_REQ_WINDOW_MIN || '10', 10) * 60 * 1000,
  max: Number.parseInt(process.env.AUTH_RATE_LIMIT_OTP_REQ_MAX || '4', 10),
  message: 'Too many verification code requests. Please wait a few minutes before requesting another code.',
  keyGenerator: req => `otp-req:${(req.body?.email || '').toLowerCase().trim()}`
});

// Max 10 OTP verification attempts per 5 minutes
export const otpVerifyRateLimiter = createRateLimiter({
  windowMs: Number.parseInt(process.env.AUTH_RATE_LIMIT_OTP_VER_WINDOW_MIN || '5', 10) * 60 * 1000,
  max: Number.parseInt(process.env.AUTH_RATE_LIMIT_OTP_VER_MAX || '10', 10),
  message: 'Too many verification attempts. Please wait before trying again.',
  keyGenerator: req => `otp-ver:${req.ip}:${(req.body?.email || '').toLowerCase().trim()}`
});

// Max 3 password reset requests per 15 minutes per email
export const passwordResetRateLimiter = createRateLimiter({
  windowMs: Number.parseInt(process.env.AUTH_RATE_LIMIT_RESET_WINDOW_MIN || '15', 10) * 60 * 1000,
  max: Number.parseInt(process.env.AUTH_RATE_LIMIT_RESET_MAX || '3', 10),
  message: 'Too many password reset requests. Please check your inbox or try again in 15 minutes.',
  keyGenerator: req => `reset:${(req.body?.email || '').toLowerCase().trim()}`
});

