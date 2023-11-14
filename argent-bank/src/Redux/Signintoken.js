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

// Action creators are generated for each case reducer function
export const { setToken } = Signintoken.actions;

export default Signintoken.reducer