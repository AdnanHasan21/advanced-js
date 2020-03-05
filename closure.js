function watch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const time1= watch();
console.log(time1());
console.log(time1());
console.log(time1());

const time2= watch();
console.log(time2());
console.log(time2());

console.log(time1());
