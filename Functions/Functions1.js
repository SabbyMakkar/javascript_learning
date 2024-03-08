//def: We wrote a code and packed it in a small packet and that we can use anywhere anytime

//simple_example
console.log("S");
console.log("A");
console.log("B");
console.log("B");
console.log("Y");

//declare
function myname(){
console.log("S");
console.log("A");
console.log("B");
console.log("B");
console.log("Y");
}

// myname()//()means reference of the function
//number1 and number2  are paramters while we make functions
// function addno(number1,number2){//we dont need to specify the numbers datatypes but further we will see it will create problem if two input one inpur is string then JS will automatically take other as string also
//     console.log(number1+number2);
// }

//modified verrison below due to undefined result value

function addno(number1,number2){//we dont need to specify the numbers datatypes but further we will see it will create problem if two input one inpur is string then JS will automatically take other as string also
//    1st method // let result=number1+number2
    // return result;
    // console.log("Sabby")//will not execute becaue of function property it will not execute anything after return 

    //2md method
    return number1+number2
}


// addno(3,4)//here while calling the function 3, 4 are called "arguments"
// addno(3,"4")

const result=addno(2,4)//but its output is 6 but now result value is not 6 
console.log(result)//value will be undefined 
//console doesnt means that we have to return the value also its just simply means print the console thats why the result doest return any value its just undefined 

//way to how we can take values

// function loginuser(username){
//     return `${username} just loggedIn`

// }
// loginuser("Sabby")=====>simply return the value it will not print anything

function loginuser(username){
    if(username==undefined){
        console.log("please enter the username")
    }
    return `${username} just loggedIn`

}
console.log(loginuser("Sabby"))
console.log(loginuser(""))
console.log(loginuser())//undefined not null