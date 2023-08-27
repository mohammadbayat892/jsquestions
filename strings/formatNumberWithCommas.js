function formatNumberWithCommas(input) {
    // تبدیل رشته به عدد و بررسی طول آن
    const num = parseInt(input, 10);
    if (isNaN(num)) {
      return "Invalid input";
    }
  
    // تبدیل عدد به رشته و جدا کردن سه رقم سه رقم با کاراکتر ","
    const formatted = num.toLocaleString("en-US");
    return formatted;
  }
  
  // تست تابع
  const input = "1234";
  const formattedNumber = formatNumberWithCommas(input);
  console.log(formattedNumber); // خروجی: "1,234"
  