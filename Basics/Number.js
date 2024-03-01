//NUMBERS
// const score=18
// console.log(score)
// //we can explicitly define that we want number only
// const balance=new Number(188)//it will cast specially that 188 is number
// console.log(balance)

// console.log(balance.toString())
// console.log(typeof('balance'))
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))//during ecommerce we have to calculate the gst so it gives us the precision upto 2


// const othernumber=23.45443
// const othernumber2=234.5643
// console.log(othernumber.toPrecision(3))//gives the string type
// console.log(othernumber2.toPrecision(3))//gives 235

// const hundered=10000000
// console.log(hundered.toLocaleString())//sometimes we get confused while counting the number of 0's so this will help us to give the number with commas acc to US standard
// console.log(hundered.toLocaleString('en-IN'))//acc to indian number system
// Number.MIN_VALUE gives the smallest value of the number

//************************************************** */
//MATHS
// console.log(Math)
// console.log(Math.abs(-4))//- value into positive
// console.log(Math.round(4.4))
// console.log(Math.round(4.7))
// console.log(Math.ceil(4.2))//take ceiling value means upper value only even if written 4.7 also
// console.log(Math.floor(4.7))
// console.log(Math.sqrt(81))
// console.log(Math.min(2,3,4,5,433,3))

console.log(Math.random())//will always be in between 0 and 1 and will always change everytime we run it
console.log(Math.random()*10)//will shift one place
//but value can be 0.04 so to avoid that case we always do plus 1
//and when we floor this value our value will become 0 but thats not we need to to avoid this we add 1
console.log((Math.random()*10)+1)


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
//we need value from 10 to 20 but without adding min we get the floor value 0 6 any so we add min like we need 10 at min