import {
    createAsyncThunk,
    createSelector,
    createSlice,
  } from "@reduxjs/toolkit";
  import { instance } from "../API/API";

const initialState = {
    items: [],
    isLoading: true,
    error: "",
  };

export const getMenu = createAsyncThunk(
    'getMenu',
    async (data, { rejectWithValue }) => {
        try {
            const response = await instance
            .get(`items`)
            .then((response) => response);
            return response.data;

        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMenu.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMenu.fulfilled, (state, {payload}) => {
                state.isLoading = false 
                state.items = payload;
                console.log(state.items);
            })
            .addCase(getMenu.rejected, (state) => { 
                state.isLoading = false
            })    
    },
});
const { reducer } = menuSlice;

const stateSelector = (state) => state?.menu;

export const listMenuSelector = createSelector(
    stateSelector,
    (state) => state.items
  );

export default reducer;