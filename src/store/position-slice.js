import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const positionSlice = createSlice({
    name: 'positionSlice',
    initialState,
    reducers: {
        getPosition(state, payload) {
            console.warn(payload)
            state = { lat: payload.lat, long: payload.long }
        }
    }
})


export const positionSliceActions = positionSlice.actions;
export default positionSlice.reducer;