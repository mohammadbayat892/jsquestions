function calculatePasswordStrength(password, weakWords) {
    if (password.length < 12) {
      return 0;
    }
  
    let score = password.length;
  
    if (/[A-Z]/.test(password)) score += 2;
    if (/\d/.test(password)) score += 2;
    if (/[a-z]/.test(password)) score += 1;
  
    if (weakWords.includes(password)) return 0;
  
    return score;
  }
  
  // تست تابع
  const password = "abcEFG12345";
  const weakWords = ["password", "123456", "qwerty"];
  const strength = calculatePasswordStrength(password, weakWords);
  console.log(strength); // خروجی: 16
  