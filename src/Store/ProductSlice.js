//import create slice method from redux toolkit
import { createSlice } from '@reduxjs/toolkit'
const initialState={
    data:[],
};
const ProductSlice=createSlice({
    name:'products',
    initialState,    
 
})
export default ProductSlice.reducer
export const {add,remove}=ProductSlice.actions;