Function.prototype.throttling = function (fn, limit) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall === undefined ||  (this.lastCall - previousCall) > limit) {
            fn(args);
        } 
    }
}