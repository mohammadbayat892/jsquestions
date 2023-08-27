function customReplaceAll(input, replaceThis, replaceTo) {
    if (replaceThis === "" || replaceTo === "") {
      return input;
    }
  
    let result = "";
    let currentIndex = 0;
  
    while (currentIndex < input.length) {
      const substringToCheck = input.substring(currentIndex, currentIndex + replaceThis.length);
      
      if (substringToCheck === replaceThis) {
        result += replaceTo;
        currentIndex += replaceThis.length;
      } else {
        result += input[currentIndex];
        currentIndex++;
      }
    }
  
    return result;
  }
  
  // تست تابع
  const input = "Hello World Hello Again";
  const replaceThis = "Hello";
  const replaceTo = "salam";
  console.log(customReplaceAll(input, replaceThis, replaceTo)); // خروجی: "salam World salam Again"
  