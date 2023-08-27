function isValidParentheses(input) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    
    for (const char of input) {
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
        if (stack.pop() !== correspondingOpeningBracket) {
          return false;
        }
      }
    }
    
    return stack.length === 0; // اگر پرانتز‌ها معتبر باشند، پایان رشته باید معتبر باشد
  }
  
  // تست تابع
  const validString = "(())";
  const invalidString = "())(";
  console.log(isValidParentheses(validString));   // خروجی: true
  console.log(isValidParentheses(invalidString)); // خروجی: false
  