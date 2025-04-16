const accountId =1234;
let accountEmail = "abc@xyz"
var accountPass = '12345'
let accountState; /*This by deafult is known as a undefined . The value is not assigned */


// accountId = 2 // asigning new value to a const varible is not allowed

console.log(accountId);

/* Due to error in block scope and functional scope the var is preffered not to use */

accountEmail = "ababa@xyz"
accountPass = "1212121"
accountCity = "Bihar"
/* Avoid using variables without declaring them it is not a good practice. it is possible but not a good practice */

console.table ([ accountId, accountEmail, accountPass, accountCity, accountState]) /* This outputs the data in a tabular format */