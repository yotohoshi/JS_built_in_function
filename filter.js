Array.prototype.filter = function (fn) {
    let finalArr = [];
    for(item of this) {
        let result = fn(item);
        if (result === true) {
            finalArr.push(item);
        }
    }
    return finalArr;
};

let arr = [1, 2, 3, 4, 5, 6];
function isEven(num) {
    return (num % 2 === 0);
};

let result = arr.filter(isEven);
console.log(result);