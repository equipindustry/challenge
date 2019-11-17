const initState = {
    products: [
        {
            name: "Product", price: "$200.00", sku: "DP18-Bk-T", discount: "-20%", id: 1
        },
        {
            name: "Product", price: "$200.00", sku: "DP18-Bk-T", discount: "-20%", id: 2
        },
        {
            name: "Product", price: "$200.00", sku: "DP18-Bk-T", discount: "-20%", id: 3
        },
        {
            name: "Product", price: "$200.00", sku: "DP18-Bk-T", discount: "-20%", id: 4
        }
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer