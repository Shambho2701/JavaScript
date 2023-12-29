const accountId = 12456
let accountEmail = "abc@abc.com"
var accountPassword = "11111"
accountCity = "Nashik"
let accountState;

console.log(accountId);

accountEmail = "ab@ab.com"
accountPassword = "22222"
accountCity = "mumbai"
// prefer not to use var , beacuse of issu in block scope and function scope// 

console.log(accountId);


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);