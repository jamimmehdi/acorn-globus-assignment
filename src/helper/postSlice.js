import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        searchKeyword: null,
        isLoading: false
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = [...action.payload];
        },
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setPosts, setSearchKeyword, setLoading } = counterSlice.actions;

export default counterSlice.reducer