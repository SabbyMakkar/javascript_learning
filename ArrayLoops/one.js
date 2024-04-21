//for_of  loop
const arr =[1,2,3,4,5]

// for (const iterator of object) {
    //not for specific OBJECTS only dont confuse
    //here its asking on which thing you are using the loop
// }

// for (const num of arr) {
//         console.log(num);
//     }

// const greetings = "Hello Sabby"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//*********************************************** */
//MAPS
//Object that holds key value pairs
//contain als
const map = new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('AUS',"Australia")
// map.set('IN',"India")//will not be printed

console.log(map)

for (const key of map) {
    console.log(key);
    
}
for (const [key] of map) {
    //destructuring of the Array
    console.log(key);
    
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Gta'
// }
// const myObject = {//still not iterable
//     game1: 'NFS',
//     game2: 'Gta'
// }

// for (const [key] of myObject) {
// //not iterable Object are not iterable with this loop
//     console.log(key);
// }

//can we use map

// for (const key in map) {
//     console.log(key);
// }//not iterable 