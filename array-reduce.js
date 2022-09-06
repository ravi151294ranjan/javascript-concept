const productDetails = [
    {productId: 1, productName:"Mobile", productPrice:10000},
    {productId: 2, productName:"Laptop", productPrice:50000},
    {productId: 3, productName:"TV", productPrice:40000}
]

//Find the sum total of price of all products.

const totalCost = productDetails.reduce((finalCost, currectProduct) => {
    return finalCost + currectProduct.productPrice
}, 0)

console.log(totalCost);