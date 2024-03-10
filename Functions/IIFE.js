// Immediately Invoked Function Expressions(IIFE)

//reasons to use this
//a. we dont need global scope to pollute our code
//b. and we need to execute Immediately

// function chai(){
//     console.log("DB connected");
// }
// chai()


//IIFE
(function chai(){
    console.log("DB connected");
})();
//understand the parenthesis first()is of function and second ()is we calling that function

//in terms of arrow function
//we will ask if we have to write function in IIFE only arrow will create problem but the answer is NO
// (()=>{
//     console.log(`DB connected`);
// })()
// (function aurcode(){
//     console.log(`DB connected`);
// })()//it will give error because when we Invoke we know where to stop so we need to end the funtion so just put ';' at the end of each function
((name)=>{
    console.log(`DB connected  ${name}`);
})('Sabby')//==> see it as function Sabby is being passed to invoked function

//when two IIFE are passed just give the ";"at end 