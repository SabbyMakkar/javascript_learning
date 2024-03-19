//Code should run on condition and that is called Control Flow

//1. IF(CONDITION){}//if condition is true then only code inside it executes
//to check true we have to do comparison 
//examples: <,>,<=,>=,==,!=(negative statement but still holds true),===(also check the type )

// const score=200
// if(score>100){
//     const power="fly";
//     console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`);//give error because power scope is inside {}only not outside
//but when we use VAR power both will print due to its global scope 


// const balance=1000;
// if(balance>500) console.log("test");//implicit scope we assume scope is there though we havent wrote it in our code


//Nesting
// const balance=1000

// if(balance<500){
//     console.log("less than");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200  ");
// }

//if(condition 1 && condition 2)//Both statments should be true to run the if one is false we dont go into the if code
//if(condition 1 || condtion 2)//OR statement anyone is true we will allow to run if code


const useremail="h@hail.com"
if(useremail){//we just checks the value if the value is ther then we ran the statment
    //Truethy//we just assume value to be true if its empty we will get we dont have email but if any value is there we assume it as true

    console.log("GOT");   
}
else{
    console.log("Dont have email");
}

// false,0,-0=>falsy value
// BigInt 0n ==> falsy value
// null , defined ,NaN==>Falsy value

//truthy values
//"0"==>0 inside true
//"false"==>truty because written inside String any value written inside String is truthy
//[],{},function(){}


// const emotobj={}
// if(Object.keys(emotobj).length===0){//we are getting the object and getting the output in form of ARRAY so we can use length function

// }


//NUllish
//(??): null undefined
// let val1;
// // val1= 5 ?? 10
// //  val1=null ?? 10 // used in DB like if value is coming null then we proceed further is values comes give the output
// // val1=undefined?? 15
// console.log(val1);

// TERNIARY OPERATOR
//conditon?true:false