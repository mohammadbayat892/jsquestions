function rememberOrDo(fn) {
    const memory = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (memory.has(key)) {
            console.log("Returning cached result...");
            return memory.get(key);
        } else {
            const result = fn(...args);
            memory.set(key, result);
            console.log("Calculating and caching result...");
            return result;
        }
    };
}

function slowSum(a, b) {
    console.log("Calculating sum...");
    return a + b;
}

const fastSum = rememberOrDo(slowSum);

console.log(fastSum(2, 3)); // Calculates and caches result
console.log(fastSum(5, 6)); // Calculates and caches result
console.log(fastSum(2, 3)); // Returns cached result
console.log(fastSum(2, 3)); // Returns cached result
