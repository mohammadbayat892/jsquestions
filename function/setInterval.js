function printNumbersSequentially(start, end, intervalInSeconds) {
    let currentNumber = start;

    const intervalId = setInterval(() => {
        console.log(currentNumber);
        currentNumber++;

        if (currentNumber > end) {
            clearInterval(intervalId);
        }
    }, intervalInSeconds * 1000);
}

const startNumber = 1; // عدد ابتدایی
const endNumber = 10; // عدد انتهایی
const interval = 2; // زمان به ثانیه

printNumbersSequentially(startNumber, endNumber, interval);
