import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "email",
    initialState: {
        value: "",
    },
    reducers:{
        setEmail: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const {setEmail} = dataSlice.actions

export default dataSlice.reducer