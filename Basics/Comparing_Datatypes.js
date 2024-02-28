// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);

// *problem arises when we dont compare the same datatypes
console.log("2">1)
console.log("02">1);//==>sometimes we dont get the predicted result so make sure we compare the same datatypes

console.log(null>0);
console.log(null==0);
console.log(null>=0);

//== and <,>,<= these two works differently because Comparison convert the null to a number and treating null as 0
// same problem comes with the undefined but in undefined answer is also false

//== and === also works differently

// Strict check
//"==="==>not only just checks the value but also checks the datatypes
