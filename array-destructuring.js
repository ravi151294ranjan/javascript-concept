const myArray = ["apple","banana","Mango","grapes"]

let [firstValue,secondValue, ...restValue] = myArray

console.log("My first value is:", firstValue);
console.log("My Second value is:", secondValue);
console.log("My rest value is:", restValue);
