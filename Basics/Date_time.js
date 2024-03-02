//Date object represent one moment from 1jan,1970
let date=new Date()
console.log(date);
//cases of conversion
console.log(date.toString());
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleString());
console.log(typeof date);//Object type

//how to declare  specific date

let mydate=new Date(2024,0,4)//month start from 0 in JS as we can see from ourput
let mydate2=new Date(2024,0,4,5,3)
//sometime we need specific format
let mycreateddate=new Date("2024-01-19")
let mycreateddate2=new Date("01-12-2025")
console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate2.toDateString())
console.log(mycreateddate)
console.log(mycreateddate2)

// Timestamps
let mytime=Date.now()//used when we design poll or quiz to identify who did faster
console.log(mytime)//give ans in milliseconds
console.log(mycreateddate2.getTime())//while hotel bookings we need to compare the date and times so we use this type of functions
//convert to seconds
console.log(Math.floor(Date.now()/1000))//without math.floor it will give is the value in the decimal that we dont need so we use math.floor

//More methods
let newdate=new Date()
console.log(newdate);
console.log(newdate.getDay());
console.log(newdate.getMonth());

//we can custom our dates with the local string we have to define it in the form of object
newdate.toLocaleString('default',{
    weekday:"long",
    
})
