const empdetails = {
    name:"ravi",
    number:"9686825936",
    address:"bihar",
    email:"ravi@gmail.com"
}

//Object dstructuring is the way to store attribute value in different variables
let {name , number} = empdetails;
let {name:myName , number:myNumber, ...restDetails} = empdetails;
console.log(name,"==========", number)
console.log(myName,"==========", myNumber, "-----", restDetails)