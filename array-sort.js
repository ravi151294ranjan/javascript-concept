const productDetails = [
    {productId: 1, productName:"Mobile", productPrice:10000},
    {productId: 2, productName:"Laptop", productPrice:50000},
    {productId: 3, productName:"TV", productPrice:40000}
]

//Arrange in increasing order of price

//This will not work in case of array of object
// console.log(productDetails.sort())

//This will sort the array of object in increasing order and modify the original array as well
// const sortedPriceDetails = productDetails.sort((a,b) =>{
//     return (a.productPrice - b.productPrice)
// })

//This will sort the array of object in increasing order and modify the original array as well
const sortedPriceDetails = productDetails.slice(0).sort((a,b) =>{
    return (a.productPrice - b.productPrice)
})

console.log(sortedPriceDetails)

console.log(productDetails)