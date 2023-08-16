function joinArrayWithSeparator(array, separator = ',') {
let result = '';

    for (let i = 0; i < array.length; i++) {
        result += array[i];

        if (i !== array.length - 1) {
            result += separator;
        }
    }

    return result;

}

// مثال استفاده از تابع joinArrayWithSeparator
const myArray = [1, 2, 3, 4, 5];
const joinedString = joinArrayWithSeparator(myArray, '-');
console.log(joinedString); // خروجی: "1-2-3-4-5"
