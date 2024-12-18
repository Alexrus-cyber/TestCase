import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],    
    loading: false,
    error: null,
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
    },
}); 

export default basketSlice.reducer;