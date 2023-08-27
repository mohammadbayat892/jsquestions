function mostCommonCharacter(inputString) {
    // تبدیل رشته به حروف کوچک
    inputString = inputString.toLowerCase();
  
    // ایجاد یک شیء (آبجکت) برای ذخیره تعداد تکرار هر کاراکتر
    const charCount = {};
  
    // محاسبه تعداد تکرار هر کاراکتر
    for (const char of inputString) {
      if (char in charCount) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  

    let maxCount = 0;
    let mostCommonChar = '';
  
    for (const char in charCount) {
      const count = charCount[char];
      if (count > maxCount || (count === maxCount && inputString.indexOf(char) < inputString.indexOf(mostCommonChar))) {
        maxCount = count;
        mostCommonChar = char;
      }
    }
  
    // تشکیل شیء حاوی کاراکتر پرتکرار و تعداد تکرار آن
    const result = { character: mostCommonChar, count: maxCount };
    return result;
  }
  
  // تست تابع
  const inputString = "aabBcCCdd";
  const result = mostCommonCharacter(inputString);
  console.log(result); // خروجی: { character: 'c', count: 2 }
  