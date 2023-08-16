function customForEach(array, func) {
for (let i = 0; i < array.length; i++) {
func(array[i]);
}
}

// مثال استفاده از تابع customForEach
function logItem(item) {
console.log(item);
}

const myArray = [1, 2, 3, 4, 5];
customForEach(myArray, logItem);
