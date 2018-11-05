const initialState = {
    productList: []
}

export function getProductListAction(productList) {
    return {
        type: 'GET_PRODUCT_LIST',
        productList
    }
}


export function getProductList(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCT_LIST":
            return {
                productList: action.productList
            }
            break;
        default:
            return state
    }
}
