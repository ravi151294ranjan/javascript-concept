const key1 = "obj1"
const key2 = "obj2"

const value1 = "firstValue"
const value2 = "secondValue"

//create object with {obj1:firstValue, obj2:secondValue}

// const finalObj = {
//     [key1] : value1,
//     [key2] : value2
// }

const finalObj= {}

finalObj[key1] = value1;
finalObj[key2] = value2

console.log(finalObj);