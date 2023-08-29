function makeCancelableTimeout(callback, timeInMilliseconds) {
    let timerId = setTimeout(callback, timeInMilliseconds);

    return function() {
        clearTimeout(timerId);
        console.log("Timeout canceled.");
    };
}

function log() {
    console.log("hadi");
}

const cancel = makeCancelableTimeout(log, 2000);

// After cancel is called, the log will not be printed and the timeout will be canceled.
cancel();
