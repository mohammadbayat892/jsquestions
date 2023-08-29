function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const number = 5; // عدد ورودی برای محاسبه فاکتوریل
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
