//Name should be like that its easily readable
const accountId=144553
let accountEmail="Sabby@google.com"
var accountPassword="34567"
accountCity="Delhi"

let accountState;//it will remail UNDEFINED
//const=value can not be changed (value is locked)
// accountId=2
// console.log(accountId);==> This code will throw error because we cant change the const value

//to declare const we have to use only 1 keyword 'CONST' but to declare the variables we can use to 2 keywords "VAR"and"LET"
//and we prefer "LET" because in "VAR" we have problem of SCOPE("{}")it unintentionally changes the value if same name is given and assigned different value

accountEmail="ch@gmail.com"
accountPassword="43345"
accountCity="bengal"

console.log(accountEmail);//its difficult to do so  to print each thing
//instead we can do this console.table to print all the valuues in tabular form
console.table([accountEmail,accountId,accountPassword,accountCity])