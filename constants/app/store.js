import { configureStore } from '@reduxjs/toolkit'

import SweetReducer from '../features/sweets/SweetsSlice'

export default configureStore({
    reducer: {
        sweets: SweetReducer
    }
})