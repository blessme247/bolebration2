import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    itemCount: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,

    reducers: {
        increment: (state)=> {
            state.itemCount += 1;
        },
        decrement: (state)=> {
            state.itemCount -= 1;
        },
    }
})


export const {increment, decrement, } = counterSlice.actions;

export default counterSlice.reducer;