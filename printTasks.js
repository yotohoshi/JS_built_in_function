let input = [{Value: 'a', Time: 2000}, {Value: 'b', Time: 1000}, {Value: 'c', Time: 3000}];

let index = 0;
let time = 0;
function printTasks(list) {
    if(Number(index) >= Number(list.length)) {
        return;
    }
    let object = list[index];
    time += object.Time;
    setTimeout(print, time, object);
    index++;
    printTasks(list);
}

function print(item) {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    console.log(hour + ":" + minute + ":" + second + " -> " + item.Value);
}

printTasks(input);