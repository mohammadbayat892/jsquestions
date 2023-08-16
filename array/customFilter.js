function customFilter(array, filterFunc) {
const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (filterFunc(array[i])) {
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;

}

// مثال استفاده از تابع customFilter
function isEven(number) {
return number % 2 === 0;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = customFilter(myArray, isEven);
console.log(evenNumbers); // خروجی: [2, 4, 6, 8, 10]
