const student = [
    {id: 101, name:'Adnan'},
    {id: 104, name:'Dola'},
    {id: 111, name:'Khairul'},
];

//const output = [];
// for(let i=0; i<student.length; i++){
//     const element = student[i];
//     const element2 = element.name;
//     output.push(element2);
// }
// console.log(output);

const output = student.map(x=>x.name);
console.log(output);

const output2 = student.filter(x => x.id>101);
console.log(output2);