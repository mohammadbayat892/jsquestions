function removeDuplicates(input) {
    let result = '';
    const seenCharacters = new Set();
  
    for (const char of input) {
      if (!seenCharacters.has(char)) {
        seenCharacters.add(char);
        result += char;
      }
    }
  
    return result;
  }
  
  // تست تابع
  const input = "ababcsalam";
  const output = removeDuplicates(input);
  console.log(output); // خروجی: "abcslm"
  