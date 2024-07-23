var prompt = require('prompt-sync')();
/*
let b = 0
let a1 = prompt("Enter the number >")
a1 = Number.parseInt(a1)

for (a=0; a<a1; a++) {
b *= (a+1) 
}
console.log(b)
*/

//for in
let marks = {
    'ayush':35,
    'hrishi':35,
    'milind':45,
    'karan':40
}
//for (let a in marks) {
//    console.log("marks of " + a + " are " + marks[a])
//}

for (let b of "ayushnagdeve") {
    console.log(b)
}