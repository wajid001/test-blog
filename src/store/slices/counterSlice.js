import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  views:{}
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementViews:(state,action)=>{
        console.log(action.payload)
        const newView=!state.views[action.payload]?1:state.views[action.payload]+1
        state.views={...state.views,[action.payload]:newView}
    }
  },
})

export const { incrementViews } = counterSlice.actions

export default counterSlice.reducer