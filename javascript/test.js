const prompt = require('prompt-sync')();

let a = prompt("What is your age?")

a = Number.parseInt(a)
//console.log(typeof a)
// If statement
/* if (a>18) {
    console.log("You can enter site")
} */

// If else statement
/*
if (a>=15) {
    console.log("You can enter :)")
}
else if (a>10 && a<15) {
    console.log("Talk to the manager :)")}
else {
    console.log("You have no right to agrue :|")
} 
*/ 

if (a>18 && a<50){
    console.log("you can enter in pool")
}
else if (a>10 && a<18){
    console.log("You dont have power to swim kiddo")
}
else if (a<10) {
    console.log("you are toddler, you even have legs ?")
}
else if (a>50 && a<60){
   console.log("Enjoy life :)")
}
    
