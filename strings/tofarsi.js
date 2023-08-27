function toFarsi(inputString) {
    const farsiDigits = '۰۱۲۳۴۵۶۷۸۹';
    let outputString = '';

    for (const char of inputString) {
        if (/\d/.test(char)) {
            const digitIndex = parseInt(char);
            outputString += farsiDigits[digitIndex];
        } else {
            outputString += char;
        }
    }

    return outputString;
}

// مثال استفاده
const inputString = "Today is 2023.";
const farsiConverted = toFarsi(inputString);
console.log(farsiConverted); 