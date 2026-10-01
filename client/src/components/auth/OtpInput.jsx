import React, { useRef, useEffect } from 'react';

/**
 * Production-ready 6-box OTP input component.
 * Features:
 * - Auto-advance on digit entry
 * - Backspace backward navigation & deletion
 * - Left/Right arrow key navigation
 * - Full clipboard paste support
 * - Numeric-only input filter & mobile numeric keypad
 * - Accessible ARIA labels
 */
export default function OtpInput({
  value = '',
  onChange,
  length = 6,
  disabled = false,
  isError = false,
  autoFocus = true
}) {
  const inputsRef = useRef([]);

  // Ensure digits array matches requested length
  const digits = Array.from({ length }, (_, i) => value[i] || '');

  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (e, index) => {
    const rawVal = e.target.value;
    // Extract only digits
    const cleanDigit = rawVal.replace(/\D/g, '').slice(-1);

    const newDigits = [...digits];
    newDigits[index] = cleanDigit;
    const combined = newDigits.join('');
    onChange(combined);

    // Auto-advance if digit was entered
    if (cleanDigit && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (!digits[index] && index > 0) {
        // Current box is already empty, move to previous box and clear it
        inputsRef.current[index - 1]?.focus();
        const newDigits = [...digits];
        newDigits[index - 1] = '';
        onChange(newDigits.join(''));
      } else {
        const newDigits = [...digits];
        newDigits[index] = '';
        onChange(newDigits.join(''));
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text');
    const cleanDigits = pasteData.replace(/\D/g, '').slice(0, length);
    if (!cleanDigits) return;

    onChange(cleanDigits);

    // Focus the box following the pasted sequence or the last box
    const focusIndex = Math.min(cleanDigits.length, length - 1);
    inputsRef.current[focusIndex]?.focus();
  };

  return (
    <div className={`cf-otp-group ${isError ? 'has-error' : ''}`} onPaste={handlePaste}>
      {digits.map((digit, i) => (
        <input
          key={i}
          ref={el => (inputsRef.current[i] = el)}
          type="text"
          inputMode="numeric"
          autoComplete={i === 0 ? 'one-time-code' : 'off'}
          pattern="[0-9]*"
          maxLength={1}
          value={digit}
          disabled={disabled}
          onChange={e => handleChange(e, i)}
          onKeyDown={e => handleKeyDown(e, i)}
          onFocus={e => e.target.select()}
          aria-label={`Verification code digit ${i + 1} of ${length}`}
          className={`cf-otp-box ${digit ? 'filled' : ''} ${isError ? 'box-error' : ''}`}
        />
      ))}
    </div>
  );
}
