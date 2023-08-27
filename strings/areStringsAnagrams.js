function areStringsAnagrams(str1, str2) {
    // حذف فاصله‌ها از رشته‌ها و تبدیل به حروف کوچک
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
  
    // اگر طول دو رشته متفاوت باشد، ریشه‌های یکدیگر نیستند
    if (str1.length !== str2.length) {
      return false;
    }
  
    // ایجاد شیء‌ای برای ذخیره تعداد تکرار هر کاراکتر در رشته‌ها
    const charCount = {};
  
    // محاسبه تعداد تکرار هر کاراکتر در رشته اول
    for (const char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // محاسبه تعداد تکرار هر کاراکتر در رشته دوم و مقایسه با رشته اول
    for (const char of str2) {
      if (!charCount[char]) {
        // اگر کاراکتر در رشته دوم وجود نداشته باشد یا تعداد تکرار آن صفر باشد، ریشه‌ها نیستند
        return false;
      }
      charCount[char]--;
    }
  
    // در این نقطه، تمام کاراکترهای دو رشته با تعداد تکرار معتبر یکسان هستند
    return true;
  }
  
  // تست تابع
  const str1 = "abab     c";
  const str2 = "a  bba c";
  const result = areStringsAnagrams(str1, str2);
  console.log(result); // خروجی: true
  