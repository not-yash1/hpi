import { configureStore } from '@reduxjs/toolkit'
import { contactReducer, fileReducer } from './userReducer'


const store = configureStore({
    reducer: {
        file: fileReducer,
        contact: contactReducer
    }
})

export default store