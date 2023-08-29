function limitCallForEveryDuration(func, duration) {
    let lastCallTime = 0;
    let timeoutId;

    return function (...args) {
        const currentTime = Date.now();
        const timeSinceLastCall = currentTime - lastCallTime;

        if (!timeoutId && timeSinceLastCall >= duration * 1000) {
            func(...args);
            lastCallTime = currentTime;
            timeoutId = setTimeout(() => {
                timeoutId = undefined;
            }, duration * 1000);
        }
    };
}

// مثال استفاده از تابع
function logName() {
    console.log("ali");
}

const limitedLogName = limitCallForEveryDuration(logName, 0.5);

for (let i = 0; i < 10000; i++) {
    limitedLogName();
}
