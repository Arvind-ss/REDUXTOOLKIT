//import create slice method from redux toolkit
import { createSlice } from '@reduxjs/toolkit'
const initialState=[];
const cartSlice=createSlice({
    name:'cart',
    initialState,
    //to create a
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item=>item.id !==action.payload)
        }
    } 
})
export default cartSlice.reducer
export const {add,remove}=cartSlice.actions;