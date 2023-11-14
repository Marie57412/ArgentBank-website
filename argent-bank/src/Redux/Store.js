import { configureStore } from '@reduxjs/toolkit'
import Signintoken from '../Redux/Signintoken'

export const store = configureStore({
  reducer: {
    setToken: Signintoken.reducer,
  },
 
});

export default store