import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const positionSlice = createSlice({
    name: 'positionSlice',
    initialState,
    reducers: {
        addWeatherToHistory(state, payload) {
            payload.payload && state.push(payload.payload);
        }
    }
})


export const positionSliceActions = positionSlice.actions;
export default positionSlice.reducer;