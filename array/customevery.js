function customEvery(array, conditionFunc) {
    for (let i = 0; i < array.length; i++) {
        if (!conditionFunc(array[i])) {
            return false;
        }
    }
    return true;
}

// مثال استفاده از تابع customEvery
function isEven(number) {
    return number % 2 === 0;
}

const myArray = [2, 4, 6, 8, 10];
const allEvenNumbers = customEvery(myArray, isEven);
console.log(allEvenNumbers); // خروجی: true
