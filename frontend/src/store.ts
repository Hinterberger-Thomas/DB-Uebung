import { configureStore } from '@reduxjs/toolkit'
import emailReducer from './features/dataSlice'

export default configureStore({
    reducer: {
        email: emailReducer,
    },
})