Function.prototype.debounce = function (fn, wait) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && (this.lastCall - previousCall) <= wait) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => fn(args), wait);
    }
};