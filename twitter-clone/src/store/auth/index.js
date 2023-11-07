const initialState ={
    currentAccount : false,
    accounts : [
        {
            id : 1, 
            username : 'ugurbozkurt.gg',
            avatar : ''

        }
    ]
}

const auth = CreateSlice({
    name : 'auth',
    initialState,
    reducers:{
        _addAccounts(state,action){
            state.accounts.push(action.payload)
        },
        _removeAccounts(state,action){
            state.accounts = state.accounts.filter(accounts => accounts.id !== action.payload.id)
            if(state.currentAccount && action.payload.id === state.currentAccount.id){
                state.currentAccount = false
            }
        },
        _setCurrentAccount(state,action){
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccounts,_removeAccounts,_setCurrentAccount } = auth.actions
export default auth.reducer