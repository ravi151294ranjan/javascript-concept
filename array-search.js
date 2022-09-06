function searchNumber(inputArray, searchNumber) {
    for (const iterator in inputArray) {
        // console.log(iterator)
        if(inputArray[iterator] == searchNumber){
            // break;
            return iterator
        }
        // else 
        // return -1
    }
    return -1
}
 const arr = [27,8,12,9,87,25]
const result = searchNumber(arr, 89)

console.log(result)

//function expression
const searchNumber = function() {}

//Arrow functiom

const searchNumber = () => {}