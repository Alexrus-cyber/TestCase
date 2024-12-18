import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],    
    loading: false,
    error: null,
};

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
    },
});

export default favoriteSlice.reducer;