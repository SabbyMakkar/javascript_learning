// function calculate(number1){
//     return number1
// }
// console.log(calculate(200,400,500)//but will return 200 only

// function calculate(...number1){//rest operator
//     return number1
// }
// console.log(calculate(200,400,500))

// function calculate(val1,val2,...number1){
//     return number1
// }
// console.log(calculate(200,400,500,2000))//return 500 and 2000 becaue val1 and val2 ara taken

const user={
    name:"Sabby",
    age:21
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.name}and age is ${anyobject.age}`);
    //we have to be careful while accessing the objects see the spelling 
}

// handleobject(user)
// handleobject({
//     user:"sam",
//     age:21
// })

const newArr=[200,4000,44,665]
function accept(getArray){
    return getArray[2]

}
console.log(accept(newArr));
