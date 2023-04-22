import { configureStore } from '@reduxjs/toolkit'

import formInputReducer from './form/formInputSlice';

const store = configureStore({
    reducer: {
        formInput: formInputReducer
    }
})

export default store;