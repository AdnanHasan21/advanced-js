const numbers = [2,4,5,6,7,8,9];

// const output = [];

// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// const result = numbers.map(element => element * element );      //map()
// console.log(result);

const result = numbers.filter(x=>x>5);
console.log(result);

const search = numbers.find(x=>x>5);
console.log(search);