//Array of object

const usersDetails = [
    {name:"ravi", number:"43764387487", email:"yen@gmail.com"},
    {name:"ranjan", number:"437643464", email:"reh@gmail.com"},
    {name:"Praneet", number:"43764387123", email:"reg@gmail.com"},
]

//retrival of array of objects

// for (const user of usersDetails) {  
//     console.log(user) // get all the objects
//     console.log(user["email"]) // get a particular attribute of all the objects
// }

//if you want to get name of first object and email of third object

const [firstObj, secondObj, thirdObj] = usersDetails // array of object destructuring
const [{name:firstName}, , {email}] = usersDetails
// console.log(firstObj['name'])
// console.log(firstObj['email'])
console.log(firstName)
console.log(email)