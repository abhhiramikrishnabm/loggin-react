import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {}
}

export const Slice = createSlice({
  name: 'logg',
  initialState,
  reducers: {
    addData:(state,action)=>{
        console.log(action,'--------');
        state.data=action.payload
    }
    },
  
})

// Action creators are generated for each case reducer function
export const {  addData } = Slice.actions

export default Slice.reducer