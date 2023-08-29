function calculate(x) {
    return function(y) {
        return function(operator) {
            switch (operator) {
                case '+':
                    return x + y;
                case '-':
                    return x - y;
                case '*':
                    return x * y;
                case '/':
                    return x / y;
                default:
                    throw new Error("Invalid operator");
            }
        };
    };
}

console.log(calculate(2)(3)('+')); // 5
console.log(calculate(2)(3)('-')); // -1
console.log(calculate(2)(3)('*')); // 6
console.log(calculate(2)(3)('/')); // 0.6666666666666666
