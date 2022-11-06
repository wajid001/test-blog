import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";

import axios from "axios";

const BASE_URL = 'https://61791a83aa7f3400174047a6.mockapi.io/v1';

const initialState= {
    loading:false,
    blogs:[],
    blog:{},
}

export const getAllBlogs = createAsyncThunk('get all blogs', async () => {
    const response = await axios.get(`${BASE_URL}/GetBLogs/`);
    return response.data;
})

export const getSingleBlog = createAsyncThunk('get single blog', async (body) => {
    const response = await axios.get(`${BASE_URL}/GetBLogs/${body}`);
    return response.data;
})

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllBlogs.fulfilled, (state, action) => {
            state.blogs=action.payload
            state.loading=false
        })
        builder.addCase(getSingleBlog.fulfilled, (state, action) => {
            state.blog=action.payload
            state.loading=false
        })
        builder.addMatcher(isAnyOf(getAllBlogs.pending,getSingleBlog.pending),(state, action)=>{
            state.loading=true
        })
        builder.addMatcher(isAnyOf(getAllBlogs.rejected,getSingleBlog.rejected),(state, action)=>{
            state.loading=false
        })
    },
})

export default blogSlice.reducer