import { configureStore } from '@reduxjs/toolkit'
import SigninSlice from './SigninSlice'

export const store = configureStore({
  reducer: {
    Signin : SigninSlice.reducer,
  },
 
})

export default store