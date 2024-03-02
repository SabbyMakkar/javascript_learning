const myarr=[0,1,2,3,4,5]
// //arrays are resizable in JS
// //if we have to access one data we see the indexing we cant access directly
// //0 based Indexing
// //arrays copy operations make shallow copy means we change direct in the original message

// const myheros=["superman","batman","ironman"]
// const myarr2=new Array(1,2,3,4)
// console.log(myarr2)
// console.log(myarr)

// //Methods
// myarr.push(6)//Push
// myarr.push(7)
// myarr.pop()
// console.log(myarr)

// myarr.unshift(9)//9 will get inserted in 1st of the element so shift all the element
// myarr.shift()//remove the 9 in front
// console.log(myarr)

// console.log(myarr.includes(9))//boolean asking array if contains the array
// console.log(myarr.indexOf(9))
// console.log(myarr.indexOf(3))

// const newArr=myarr.join()
// console.log(myarr)
// console.log(typeof myarr)//it will change the type of array to String

//SLICE AND SPLICE
console.log("A ",myarr);
const myn1=myarr.slice(1,3)//1 2 include 3 not included
console.log(myn1);
console.log(("B ",myarr));

const myn2=myarr.splice(1,3)//it will include 1 2 3 
console.log("C ",myarr)
console.log(myn2);//Splice manupilate the Original Array

//We always tell diff between slice and splice is in slice range is not included but in splice range is included but its wrong
//Instead we have to Splice manupilate the Original Array but slice don't