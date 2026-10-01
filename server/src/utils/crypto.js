import crypto from 'node:crypto';

const PEPPER = process.env.OTP_PEPPER || process.env.JWT_SECRET || 'cf_secure_auth_pepper_2026';

/**
 * Generates a cryptographically secure 6-digit numeric OTP.
 * @returns {string} 6-digit string, e.g. "491823"
 */
export function generateOtp() {
  // randomInt generates an integer in [min, max)
  const code = crypto.randomInt(100000, 1000000);
  return code.toString();
}

/**
 * Computes a secure SHA-256 HMAC or salted hash of an OTP.
 * @param {string} otp 
 * @param {string} [salt] 
 * @returns {string} hex hash
 */
export function hashOtp(otp, salt = '') {
  return crypto
    .createHmac('sha256', PEPPER)
    .update(`${otp}:${salt}`)
    .digest('hex');
}

/**
 * Securely compares an entered OTP against a stored hash using constant-time comparison.
 * @param {string} enteredOtp 
 * @param {string} storedHash 
 * @param {string} [salt] 
 * @returns {boolean}
 */
export function verifyOtpHash(enteredOtp, storedHash, salt = '') {
  if (!enteredOtp || !storedHash) return false;
  const computedHash = hashOtp(enteredOtp, salt);
  const bufA = Buffer.from(computedHash, 'utf8');
  const bufB = Buffer.from(storedHash, 'utf8');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Generates a high-entropy random token for password reset.
 * @returns {string} 64-character hex string
 */
export function generateResetToken() {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Hashes a reset token for secure storage in database.
 * @param {string} token 
 * @returns {string} hex hash
 */
export function hashResetToken(token) {
  return crypto
    .createHmac('sha256', PEPPER)
    .update(token)
    .digest('hex');
}

/**
 * Securely verifies a reset token against its stored hash.
 * @param {string} enteredToken 
 * @param {string} storedHash 
 * @returns {boolean}
 */
export function verifyResetToken(enteredToken, storedHash) {
  if (!enteredToken || !storedHash) return false;
  const computed = hashResetToken(enteredToken);
  const bufA = Buffer.from(computed, 'utf8');
  const bufB = Buffer.from(storedHash, 'utf8');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}
