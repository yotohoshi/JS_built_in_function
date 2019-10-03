Array.prototype.reduce = function (reducer) {
    let inital = 0;
    let accumulator = inital;
    for(item of arr) {
        accumulator = reducer(accumulator, item);
    }
    return accumulator;
};

function reducer(accumulator, num) {
    accumulator += num;
    return accumulator;
}

let arr = [1, 2, 3, 4, 5];
console.log(arr.reduce(reducer));

