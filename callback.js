function myFunc(firstName) {
    console.log("Inside called function")
    console.log(`My name is ${firstName}`)
}

//Function taking argument as another function
function callbackFun(callback) {
 console.log('Inside calling function')
 callback("Ravi Ranjan")
}

callbackFun (myFunc)
