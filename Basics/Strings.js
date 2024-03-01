//can be denoted from '' and ""
const name="Sabby"
const repocount=10
console.log(name+ repocount+" hello");//avoid these writing because its outdated

console.log(``)// " `` "using backtics covers concept of String interpolation
// we make placeholders
//syntax is better and modern and we can do many things on the go
console.log(`Hello my name is ${name} and my repo account is ${repocount}` )


//declare String
const gamename=new String("Sabbi-fy")//String is object type and when we run this on the console we will see that it will give value is String('Sabbif')
// and they are KEYVALUE pairs means at 0 we have S and at 1 we have A so like that

console.log(gamename[0])//Accessing the 0th key
//we can also access prototype
console.log(gamename.__proto__)//we will get object but actually its not empty 

//how we can use proto objects
console.log(gamename.length)
console.log(gamename.toLowerCase())
console.log(gamename.charAt(4))//write index no string
console.log(gamename.indexOf('i'))
//More methods
//Substring
const newgame=gamename.substring(0,3)//4th value will not include upto 3rd position is printed
console.log(newgame)


//Slice
const anotherString=gamename.slice(-8,3);// will give the values from behind
console.log(anotherString)

//Trim
const newstring="  Sabby   "
console.log(newstring)
console.log(newstring.trim())

//Replace
const url="https://asudgs.gyco/jfju%20fbud"
console.log(url.replace('%20','-'))

//Includes
console.log(url.includes("https"))


//we want to convert our string into arrays
console.log(gamename.split('-'))//based on '-' it will split our string and put it in the arrays
