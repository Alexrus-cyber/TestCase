import {
    createAsyncThunk,
    createSelector,
    createSlice,
  } from "@reduxjs/toolkit";
  import { instance } from "../API/API";

const initialState = {
    items: {},
    isLoading: true,
    error: "",
    currentPage: 1,
    itemsPerPage: 6,
    totalPages: 0,
  };

export const getMenu = createAsyncThunk(
    'getMenu',
    async (data, { rejectWithValue }) => {
        try {
            const response = await instance
            .get(``)
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
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMenu.pending, (state) => {
                if (state.items && Object.keys(state.items).length === 0) {
                    state.isLoading = true
                }else {
                    state.isLoading = false
                }
            })
            .addCase(getMenu.fulfilled, (state, {payload}) => {
                state.isLoading = false 
                state.items = {...payload};
                state.totalPages = payload.count_items;
            })
            .addCase(getMenu.rejected, (state) => { 
                state.isLoading = false
            })
    },
});
const { reducer } = menuSlice;

const stateSelector = (state) => state?.menu;

export const setCurrentPage = menuSlice.actions.setCurrentPage;

export const listMenuSelector = createSelector(
    stateSelector,
    (state) => state.items
  );


export default reducer;