import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	currentAccount: {
		id: 1,
		username: 'ugurbozkurt.gg',
		fullName: 'Uğur',
		avatar: 'https://pbs.twimg.com/profile_images/1703048675239337984/6ay2racU_normal.jpg',
		isLocked: true	
	},
	accounts :[
		{
			id: 1,
			username: 'ugurbozkurt.gg',
			fullName: 'Uğur',
			avatar: 'https://pbs.twimg.com/profile_images/1703048675239337984/6ay2racU_normal.jpg',
			isLocked: true,
			notification : 0	
		},
		{
			id: 2,
			username: 'kallaxgerton',
			fullName: 'Kallax Gerton',
			avatar: 'https://pbs.twimg.com/profile_images/1589060489530818562/jhNYvoC7_normal.jpg',
			isLocked: true,
			notification : 15	
		}
	]
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		_addAccount: (state, action) => {
			state.accounts.push(action.payload)
		},
		_removeAccount: (state, action) => {
			state.accounts = state.accounts.filter(account => account.id !== action.payload)
			if (state.currentAccount && action.payload === state.currentAccount.id) {
				this._setCurrentAccount(false)
			}
		},
		_setCurrentAccount: (state, action) => {
			state.currentAccount = action.payload
			state.accounts.reverse()
		}
	}
})

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer
