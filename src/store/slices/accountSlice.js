import { createSlice } from '@reduxjs/toolkit'

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    token: '',
    accountInfo: {
      name: '',
      email: '',
      firstName: '',
      lastName: '',
      avatar: ''
    }
  },
  reducers: {
    login(state, action) {
      state.push(action.payload)
    }
  }
})

const { actions, reducer } = accountSlice

export const { 
  login
} = actions

export default reducer
