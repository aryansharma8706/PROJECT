import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    todo : null,
    error : 
}

const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        pending : (state) =>{
            state.loading = true
        }
    }
});

export default todoSlice.reducer
export const {pending} = todoSlice.actions