import { configureStore } from '@reduxjs/toolkit'
import accountSlide from '@/store/slices/accountSlice'

const rootReducer = {
  account: accountSlide
}

const store = configureStore({
  reducer: rootReducer
})

export default store