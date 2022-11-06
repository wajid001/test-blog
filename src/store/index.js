import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./slices/counterSlice"
import blogSlice from './slices/blogSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    blogs:blogSlice
  },
})