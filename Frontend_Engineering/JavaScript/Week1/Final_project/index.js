const usersDatabases = {
  "jerrylyte" : {
    firstName : "Jeremiah",
    lastName  : "Ojonuba",
    emailAddress: "ojonuba93@gmail.com",
    accountActivated: true,
    password :12340000,
  },
  "faemous" : {
    firstName : "Lucky",
    lastName  : "Abiom",
    emailAddress: "faemous132@gmail.com",
    accountActivated: true,
    password : 00001234,
  },
  "ofine" : {
    firstName : "Wendy",
    lastName  : "Peters",
    emailAddress: "wendy98@gmail.com",
    accountActivated: true,
    password : 12340987
  },
  "serah21" : {
    firstName : "Sarah",
    lastName  : "Ejinavi",
    emailAddress: "sarahhort@gmail.com",
    accountActivated: true,
    password :12345678,
  },
}



function displayUserDetails (){
  //Enter username 
  let username = prompt("Enter your username")
while (validateUsername(username) ==false){
  username = prompt("Username not valid. Please enter a valid Username")
}
if (username==null){
    return
  }
  //Enter password
let password = prompt("Enter your password")
while (validatePassword(password)==false){
  password =prompt("Password not valid. Please enter a valid password")
}
if (password ==null){
    return 
}
  //Confirm password
let passwordConfirm = prompt("Confirm your password")
while (passwordConfirm !== password){
  passwordConfirm = prompt("Password incorrect. Please re-enter password ")
}
if (passwordConfirm ==null){
  return
}
//confirm if userdata is available
const user =usersDatabases[username]
if (user ==undefined){
  alert("User not found! Please register on the app")
  return
}
alert(`
User found with the following details:
First Name : ${user.firstName}
Last Name : ${user.lastName}
Email : ${user.emailAddress}
Account Activated : ${user.accountActivated}
`)


//console.log(username, password, passwordConfirm)

}
displayUserDetails()
alert("You have come to the end of this program. Goodbye")



function validateUsername (username){
  if (username==null){
    return true
  }
  
  if (username.length >10){
    return false
}else{
  return true
  }  
}

function validatePassword (password){
  if (password ==null){
    return true
  }
  if (password.length < 6){
    return false
  }else{
    return true
  }
}
/**function validatePasswordConfirm(passwordConfirm){
  if (password==null){
    return true
  }
  if (passwordConfirm!==password){
    return false
  }else{
    return true
  }
}*/

