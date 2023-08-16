function customMap(array, mapFunc) {
const mappedArray = [];

    for (let i = 0; i < array.length; i++) {
        mappedArray.push(mapFunc(array[i]));
    }

    return mappedArray;

}

// مثال استفاده از تابع customMap
function double(number) {
return number \* 2;
}

const myArray = [1, 2, 3, 4, 5];
const doubledArray = customMap(myArray, double);
console.log(doubledArray); // خروجی: [2, 4, 6, 8, 10]
