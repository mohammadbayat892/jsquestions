function callOnceAfter(fn, seconds) {
    let timerId;

    return function() {
        clearTimeout(timerId);
        timerId = setTimeout(fn, seconds * 1000);
    };
}

function logName() {
    console.log("ali");
}

const lazyLogName = callOnceAfter(logName, 2);

lazyLogName();
lazyLogName();
lazyLogName();
lazyLogName();
lazyLogName();
lazyLogName();
lazyLogName(); // last call
