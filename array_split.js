const nums = [1,2,3,4,5,6,7,8];

const alada_kore_dekhao = nums.slice(2,5); // index 2 theke 5 er aag porjonto alada kore show koro
console.log(alada_kore_dekhao); 

// const remove_koro = nums.splice(2,5); // index 2 theke next 5 ta element remove koro
// console.log(remove_koro); 
// console.log(nums); 

const remove_kore_inject = nums.splice(2,5, 81); // index 2 theke next 5 ta element remove koro. then 81 inject koro.
console.log(remove_kore_inject); 
console.log(nums); 

const together = nums.join(",");
console.log(together);


