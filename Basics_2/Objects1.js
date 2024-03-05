//Two ways to declare objects a.as a Litreal b. as a constructor
//SINGLETON:when we create a object from cunstructor it will one of its kind object and in other multiple instances are created


//Object Literals
// const JsUser={}//object created
//2nd method
// Object.create//Constructor method
//in array we dont define the keys but in object we have that facility
const mysmb=Symbol("key1")

const Jsuser={
    name:"Sabby",
    "Full name":"Sabby Makkar",
    // mysmb:"mykey1"//not correct way to use symbol becaue its datatype gets converted to the string but the symbol is also a datatype so it should be print its datatype to be as symbol
    [mysmb]:"mykey1",
    age:18,
    location:"delhi",
    email:"Sabby@googe.com",
    isLoggedIn: false,
    lastLogin:["monday","Saturday"]
}

//how to access
console.log(Jsuser.email);//but not good method//because we cant access full name with this method
// console.log(Jsuser.[email]);//it will give error because by default in our object it is considered as String so we have to define it as string in ""
console.log(Jsuser["email"]);
console.log(Jsuser[mysmb]);

Jsuser.email="Sabby@google.coo"
// Object.freeze(Jsuser)//value will not change after that
Jsuser.email="Sabby@google.coommmm";
console.log(Jsuser) 


Jsuser.greeting=function(){
    console.log("hello")
}
// console.log(Jsuser.greeting)//undefined
// console.log(Jsuser.greeting())give the error because we freezed the Jsuser
console.log(Jsuser.greeting())

Jsuser.greeting2=function(){
    console.log(`HEllo js user,${this.name}`)//if we want to access name from our object we use this to access different properties
}
console.log(Jsuser.greeting2());