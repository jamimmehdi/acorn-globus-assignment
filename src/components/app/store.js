import { configureStore } from '@reduxjs/toolkit'
import postSlice from '../helper/postSlice'

export default configureStore({
    reducer: {
        posts: postSlice
    },
})