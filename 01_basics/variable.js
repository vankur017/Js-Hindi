const accountId = 144553
let accountEmail = "ankur@gamil.com"
var accountPassword = "123456"
accountCity = "Lucknow"
let accountState;

//accountId =2 Not allowed
/*
Note : prefer not to use var, because of issue in block scope and functional scope
*/

accountEmail = "av@avgamil.com"
accountPassword ="6789"

accountCity ="raebareli"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])