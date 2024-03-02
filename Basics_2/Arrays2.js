const heros1=["thor","Superman","Spiderman"]
const heros2=["flash","ironman","Captain"]

// heros1.push(heros2)//actually they dont merge array ke andr array ajata hai
// //array takes any data to prove this it actually took array heros2 as a data and pushed it into the heros1
// heros1.push(heros2)

// console.log(heros1);
// console.log(heros1[2][1]);

// //Concate
const allhero=heros1.concat(heros2)//push directly gives the value while concat gives the value in the new array
console.log(allhero);

//SPREAD operator
const allnew=[...heros1,...heros2]//...spread all the values
console.log(allnew);

//
const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_usable_array = anotherarray.flat(Infinity)//we have to define depth upto which we want our data
console.log(real_usable_array);


console.log(Array.isArray("sabby"))//tell whether is our array or not
console.log(Array.from("sabby"))//pura array bnadega

//Interesting case
console.log(Array.from({name:"Sabby"}))//we have to define kiska array bnao keys ka yaani ki name ka Sabby ka so in this we have to define if we dont define it will always give us NULL array like in this case

let score1=100
let score2=200
let score3=344
console.log(Array.of(score1,score2,score3))