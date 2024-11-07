import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
    name: "signIn",
    initialState : { signIn: false },
    reducers: {
        setSignIn: (state) => {
            state.signIn = true;
        },
    }
})

export const { setSignIn } = signInSlice.actions;
export default signInSlice.reducer;