import { configureStore } from '@reduxjs/toolkit'
import positionReducer from '../store/position-slice';

const store = configureStore({
    reducer: {
        positionReducer: positionReducer,
    }

})

export default store;