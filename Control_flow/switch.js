//SYNTAX
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3;//key is month
switch (month) {
    case 1:
        console.log("JAN");
        break;
    case 2:
        console.log("FEB");
        break;
    case 3:
        console.log("MAR");
        break;//if break isnt there then the whole code besides this MATCHED condition will run
    case 4:
        console.log("APR");
        break;
    case 5:
        console.log("MAY");
        break;
    case 6:
        console.log("JUN");
        break;
   

    default:
        console.log("default ");
        break;
}