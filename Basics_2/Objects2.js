// const tinder=new Object()//singleton
const tinder={}//same as above empty object//non singleton
console.log(tinder);

tinder.id="123abc"
tinder.name="Sabby"
tinder.isLoggedin=false
console.log(tinder);

const regular={
    email:"mio@ukail.com",
    fullname:{
        userFullname:{
            firstname:"moho",
            lastname:"singh"
        }
    }
}
console.log(regular.fullname);
console.log(regular.userFullname);

//sometimesvalue doesnt exist so we have to use the syntax
console.log(regular.userFullname?.userFullname.firstname);//? which means ?  if value exist then only give

//Merging array
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}
console.log(obj3);//problematic
const obj4=Object.assign(obj1,obj2)
console.log(obj4);
const obj5=Object.assign({},obj1,obj2)//good practice to do so
console.ob3={...obj1,...obj2}//spreadoperator
consol.log(obj3)
console.log(obj5);

//if value comes from DB
//array of objects  
const user=[
    {
        id:1,
        email:"suhd@jd.com"
    },
    {
        id:1,
        email:"suhd@jd.com"
    },
    {
        id:1,
        email:"suhd@jd.com"
    }, 

]

//Methods
user[1].email
console.log(tinder);
console.log(Object.keys(tinder));//give us the keys
//output will of Array datatype

console.log(tinder.hasOwnProperty);
