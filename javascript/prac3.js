var prompt = require('prompt-sync')();


let obj = {
    harry:98,
    rohan:70,
    akash:7,
}

//for (i=0;i<Object.keys(obj).length;i++){
  //  console.log("the marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]] )
//}

// 2 
/*
for (let a in obj) {
    console.log("The marks of",a, "is ",obj[a])
}
*/

/*
// wrong one
let b = prompt("Enter a number >")
b = Number.parseInt(b)

if (b==10){
    console.log("correct number")
}
else {
    console.log("try again")
}
*/

//4 write function to find mean on 5 numbers
function mean(a,b,c,d) {
    return (a+b+c+d);
}

let a1 = prompt("Enter the 1 number >")
let b1 = prompt("Enter the 2 number >")
let c1 = prompt("Enter the 3 number >")
let d1 = prompt("Enter the 4 number >")
console.log("Average of given five numbers is", mean(a1,b1,c1,d1))




//3 correct wala
/*let cn = 20
let i
while (i!=cn) {
     console.log("try again")
    i = prompt("Enter a number> ")
   
}
console.log("You are correct :)")*/



