// const user={
//     user:"sabby",
//     price:999,
//     //i want if user comes into this function then only we pass the message
//     welcomeMessage:function(){
//         //user may change so we have to change the username but for now we are working on the current text so we used this keyword
//         console.log(`${this.user}, welcome to the website`);
//         console.log((this));
//     }

// }

// // user.welcomeMessage()//==>current context here is sabby
// // user.user="Happy"//==>but here current context here is Happy 
// // user.welcomeMessage()
// // user.welcomeMessage()
// // console.log(this);//==>current is empty this refer to the empty becaue no global object is there

// //Early we used to do JS on browser only and there global object is Windows but now as nodeis available so we can work anywhere so now this is empty because no global is there
// //WINDOWS is the Global Object for the BROWSER

// // function chai(){
// //     // // let user="Sabby"==>it will give the undefined becaue we can access the THIS keyword in the OBJECT
// //     // console.log(this.user);
// // }
// // chai();

// //how to declare function using arrow

// const chai= ()=>{
//     let user="Sabby"
//     console.log(this);//wrong assumption that we cant use this function in arrow it will work same gives the same empty set if simple this keyword is called
    
// }
// // chai();

// // //basic syntax arrow function
// // //()=>{}
// // const add=(num1,num2)=>{
// //     return num1+num2;
// // }
// console.log(add(3,5));

// // //implicit return 
// // const add=(num1,num2)=>num1+num2
// // const add=(num1,num2)=>(num1+num2)//==>curly braces mein kiya toh return krna pdega agr simple ( kiya to return use nahi krna padega)

// //to return object we need to wrap it in {}
// const add=(num1,num2)=>({num1+num2})