// function one(){
//     const user="Sabbu"

//     function two(){
//         const website="youtube";
//         console.log(user);
//     }
//     // console.log(website)//we cant access it scope got over inside two only
//     two()//due to upper line it doesnt execute but now its commented it will work
// }
// one()

//when we call functions a new Call Stack is always made 

// if(true){
//     const user="Sanny"
//     if(user==="Sanny"){
//         const web="Yt"
//         console.log(user+web);
//     }
//     // console.log(web);//error
// }
// // console.log(user);//error


//++++++++++++++++++++++++++++++++++++++++++
console.log(add(5));
function add(num){
    return num+1

}
add(5)


addtwo(5)//will give error because we cant access the addtwo but in upper part its working but here we filled the functiontwo in variable addtwo
//this concept is called HOISTING how we store and call functions
const addtwo=function(num){
    return num+2;
}
// addtwo(5)



