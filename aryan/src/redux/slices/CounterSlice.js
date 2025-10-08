import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name : "counter",
    initialState : {count: 0},

    reducers : {
        increment : (state,action) =>{
            return {count : state.count +1};
        },
        decrement : (state,action) =>{
            return {count : state.count -1};
        }
    }

})