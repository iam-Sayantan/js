const accountId = 14453
let accountEmail = "abc@xyz.com"
var accountPassword = "12345"
accountCity = "Kolkata"

// accountId = 12 // We cannot change the value of a const variable
accountEmail = "xyz@abc.com"
accountPassword = "098765"
accountCity = "Chandannagar"
let accountState

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/