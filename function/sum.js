function sum(initialValue) {
    let currentSum = initialValue;

    function addNextValue(nextValue) {
        currentSum += nextValue;
        return addNextValue;
    }

    addNextValue.toString = function() {
        return currentSum;
    };

    return addNextValue;
}

console.log(sum(1)(2)); // 3
console.log(sum(1)(2)(3)); // 6
console.log(sum(5)(-1)(2)); // 6
console.log(sum(6)(-1)(-2)(-3)); // 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15
