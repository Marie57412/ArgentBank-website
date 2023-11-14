import { configureStore } from '@reduxjs/toolkit'
import userInfosSlice from '../Redux/Signintoken'

export const store = configureStore({
  reducer: {
    user: userInfosSlice.reducer,
  },
 
});

export default store