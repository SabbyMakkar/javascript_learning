// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(c);
// console.log(b);
//if var is working whats the need of taking the let and const
//.===>because it doesnt work as our block scope


//"{}"==> Scope if it comes with functions or if called scope of that 

//everything inside the if block is called block scope 
// everything we write outside that block is the GLobal Scope
if(true){
let a=10
const b=20
var c=30
}
// console.log(a);//not defined because we defined the a inside the if block it shoulnt come outside that block or scope

// console.log(c);==> it will work because declared as VAR and we know that it doesnt work acc to our block scope
// console.log(b);








