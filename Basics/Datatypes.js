//Two Major Categories of the datatpes
//difference is on basis of how we can store it in memory and how we can access it


//PRIMITIVE:==>(CALL BY VALUE)==>Their memory reference is not given they are copied and given to you when called and what we make changes changes occur in copy of data
// a.String
// b.Number//simply number not int floar
// c.Boolean
// d.Null//not empty 
// e. undefined//space declare hai kya value ayegi 
// f.Symbol//kisi value ko unique bnane ke liye Symbol use hota hai
// g.BigInt//scientific values

//NON PRIMITIVE:(Reference type):
//Array
//Object
//Functions

// JS is Staticallt typed we dont need to define the DATATYPE OF DATA WHILE DEFINING THE DATA

//symbol:
const id=Symbol('123')
const anotherid=Symbol('123')
//value wont be same
console.log(id===anotherid)

// //Array
// const heros=["shaktiman","batman","superman"]

// //object
// let myObj={
//     name:"Samirdh"
//     age:34
// }

//function
const myfunction=function(){
    console.log("helloworld")
}

// //how to get the datatype 
// using typeof function
// function is of object type