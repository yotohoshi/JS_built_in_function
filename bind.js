Function.prototype.bind = function () {
    let fn = this;
    let object = args.shift();
    let args = Array.prototype.slice.call(arguments);
    return function () {
        return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
    };
};