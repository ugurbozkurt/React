export const productReducers  = (state={product:{}},action)=>{
    switch (action.type) {
        case "GET_PRODUCT_DEATILS":
            return{
                ...state,
                product:action.payload
            }
        default:
            return state
    }
}