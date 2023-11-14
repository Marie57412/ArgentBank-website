 import { createSlice } from '@reduxjs/toolkit'


const Signintoken = createSlice({
    name: 'Signin',
    initialState: {
        token: "",
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;

        },
    }
})

export const { setToken } = Signintoken.actions;

export default Signintoken.reducer