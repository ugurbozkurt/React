export const productsReducers  = (state={products:[]},action)=>{
    switch (action.type) {
        case "GET_PRODUCTS":
            return{
                products:action.payload
            }
            
    
        default:
            return state
    }
}