Array.prototype.map = function (fn) {
    let res = [];
    for(item of this) {
        let value = fn(item);
        res.push(value);
    }
    return res;
};

function double(num) {
    return num * 2;
}

let arr = [0, 1, 2, 3, 4];
let res = arr.map(double);
console.log(res);