import { createSlice } from '@reduxjs/toolkit'

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    token: '',
    accountInfo: {
      email: '',
      firstName: '',
      lastName: '',
    }
  },
  reducers: {
    login(state, action) {
      const { token, accountInfo } = action.payload
      state.accountInfo = token
      state.accountInfo = accountInfo
    }
  }
})

const { actions, reducer } = accountSlice

export const { 
  login
} = actions

export default reducer
