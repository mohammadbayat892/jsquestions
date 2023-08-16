function customFind(array, conditionFunc) {
for (let i = 0; i < array.length; i++) {
if (conditionFunc(array[i])) {
return array[i];
}
}
return undefined;
}

// مثال استفاده از تابع customFind
function isEven(number) {
return number % 2 === 0;
}

const myArray = [1, 3, 5, 6, 7, 9];
const firstEvenNumber = customFind(myArray, isEven);
console.log(firstEvenNumber); // خروجی: 6
