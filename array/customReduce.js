function customReduce(array, reducerFunc, initialValue) {
let accumulator = initialValue !== undefined ? initialValue : array[0];

    for (let i = initialValue !== undefined ? 0 : 1; i < array.length; i++) {
        accumulator = reducerFunc(accumulator, array[i]);
    }

    return accumulator;

}

// مثال استفاده از تابع customReduce
function sumReducer(accumulator, currentValue) {
return accumulator + currentValue;
}

const myArray = [1, 2, 3, 4, 5];
const sum = customReduce(myArray, sumReducer, 0);
console.log(sum); // خروجی: 15
