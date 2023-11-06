import { createSlice } from '@reduxjs/toolkit'


const SigninSlice = createSlice({
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
export const { setToken } = SigninSlice.actions;

export default SigninSlice.reducer