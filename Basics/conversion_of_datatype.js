// let score="33"//""means string otherwise number
//in this we know that value is of number form but sometimes during backend we dont know vaue is coming from which form




/**********************************************************/
let score="33abc"//will also be get converted in the number
console.log(typeof score);
console.log(typeof(score));


let score1=null;

//the value is in String but we know we have to do operation as number
//so what we can do
let valueInNumber=Number(score)//this will gurantee score will be converted into the Number
let valueInNumber1=Number(score1)
console.log(typeof(valueInNumber));
console.log(valueInNumber);//if if convert it into the number it will get converted but if we directly print the number it will not show because our score is not pure number its 33abc
console.log(valueInNumber1);//null value
// if score is undefined Nan will  be given



//"33"=>33
//"33abc"=>NaN
//true==>1; false==>0

let isLoggedIn=1
let booleanisLoggedin=Boolean(isLoggedIn)

console.log(booleanisLoggedin)