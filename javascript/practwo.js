const prompt = require('prompt-sync')();

//Practice set 
//question 1
/*
let a = prompt("What is you age? ")
if (a>10 && a<20) {
  console.log("You have valid age :)")
}
else {
  console.log("You have invalid age :(")
}
*/


/*
//2
const tv = prompt("Please tekk us the brand >");
switch (tv) {
    case 'realme':
        console.log("it start from 25000/-");
    break;
    case 'sony':
        console.log("Its start form 35000/-")
    break;
    default:
        console.log("we dont have ${tv}.")
}
   */      


//3 (find if number is divisible by 2 and 3)

/*
let a = prompt("Enter the number >");
if (a%2==0 && a%3==0) {
    console.log("This number is divisible by 2 and 3 :)")
}
else {
    console.log("This number is neither divisble by 2 or 3")
}
     */

//4
/*
let b = prompt("Enter the number >");
if (b%2==0 && b%3==0) {
    console.log("This number is divisible by 2 and 3 both");

}
 else if (b%2==0){
 console.log("This number is divisible by 2")
}
else if (b%3==0){
    console.log("This number is divisible by 3")
   }
else{
    console.log("This number is not divisible by 2 or 3")
}
    */

//5

let a = prompt("Whats your age ? >");
let b = a>18? "you can drive " : "You cannot drive"
console.log(b)