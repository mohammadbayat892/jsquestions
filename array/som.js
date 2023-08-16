function customSome(array, conditionFunc) {
    for (let i = 0; i < array.length; i++) {
        if (conditionFunc(array[i])) {
            return true;
        }
    }
    return false;
}

// مثال استفاده از تابع customSome
function isEven(number) {
    return number % 2 === 0;
}

const myArray = [1, 3, 5, 7, 8, 9];
const hasEvenNumber = customSome(myArray, isEven);
console.log(hasEvenNumber); // خروجی: true
