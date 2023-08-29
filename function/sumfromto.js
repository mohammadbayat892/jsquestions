function sumFromTo(start, end) {
    if (start > end) {
        return 0;
    } else {
        return start + sumFromTo(start + 1, end);
    }
}

console.log(sumFromTo(1, 100)); // 5050
console.log(sumFromTo(1, 5));   // 15
console.log(sumFromTo(-5, 5));  // 0
function sumFromTo(start, end) {
    if (start > end) {
        return 0;
    } else {
        return start + sumFromTo(start + 1, end);
    }
}

console.log(sumFromTo(1, 100)); // 5050
console.log(sumFromTo(1, 5));   // 15
console.log(sumFromTo(-5, 5));  // 0
