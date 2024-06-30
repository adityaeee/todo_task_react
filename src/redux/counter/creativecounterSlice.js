import { createSlice } from "@reduxjs/toolkit";

export const creativeCounterSlice = createSlice({
    name: "creativeCounter2",
    initialState: {
        creative: 139,
    },
    reducers: {},
});

const creativeCounterReducer = creativeCounterSlice.reducer;
export default creativeCounterReducer;
