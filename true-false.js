 
const name = {};
//const name = []; result true
//const name = NaN; result false
//const name = null; result false
//const name = "false"; result true
//const name = false; result false
//const name = ""; result false
//const name = "0"; result true
//const name = "A"; result true
//const name = " "; result true
//const age = 0; result false
//const age = -5; result true
//const age = 5; result true

if(name){
    console.log("this is true");
}
else{
    console.log("this is false");
}