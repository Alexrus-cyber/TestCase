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
    extraReducers: {
        [fetchMenu.pending]: (state) => {
            state.loading = true;
        },
        [fetchMenu.fulfilled]: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        [fetchMenu.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
});

export default favoriteSlice.reducer;