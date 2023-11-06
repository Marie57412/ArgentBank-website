import { configureStore } from '@reduxjs/toolkit'
import Signinreducer from './SigninSlice'

export const store = configureStore({
  reducer: {
    Signin : Signinreducer,
  },
 
});

export default store