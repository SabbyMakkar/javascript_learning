//Two types of Memory===>a.Stack b. Heap

// in Primitive types ==> Stack memory is used
// in Non-Primitive ==>Heap memory is used

//Points to remember
//When we create a memory in stack its Copy is made and changes are made in copy of data
//and when we create a memory in Heap its Reference is Given and changes are directly made in the original data

//example

let myName="SabbyMakkar"
let anothername=myName
anothername="SamridhMakkar"
console.log(anothername)
console.log(myName)//we can see that still the value is same in the myName even though we changed the value in the myanotherName
//so when we give the value to the another name its original value is not given its copy is given



let user={
    email:"Sabby@google.com",
    upi:"7rh8h244"
}

let user2= user// we see that user2 and user are pointing or referencing to the one memory loc so change in user2 will direct change to user
user2.email="Samridh@ohuheu.com"

console.log(user.email);
console.log(user2.email);