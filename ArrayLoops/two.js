const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift'
}

//for_in loop

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

//can we use this in the array
//yes but print only keys of the Array
//array keys starts from 0 and are starting from the numbers

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}