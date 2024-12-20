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
    currentPage: 1,
    itemsPerPage: 6,
    totalPages: 0
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

export const getTotalPage = createAsyncThunk(
    'getTotalPage',
    async (data, { rejectWithValue }) => {
        try {
            const response = await instance
            .get(`countItems`)
            .then((response) => response);
            return response.data;

        } catch (e) {
            return rejectWithValue(e)
        }
    }
)


export const editFavorite = createAsyncThunk(
    'editFavorite',
    async ({id, ...data}, { rejectWithValue, dispatch }) => {
        try {
            await instance
            .put(`items/${id}`, {...data, favorite: data.favorite})
            dispatch(getMenu())
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const editBasket = createAsyncThunk(
    'editFavorite',
    async ({id, ...data}, { rejectWithValue, dispatch }) => {
        try {
            await instance
            .put(`items/${id}`, {...data, basket: data.basket})
            dispatch(getMenu())
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
                if (state.items.length === 0) {
                    state.isLoading = true
                }else {
                    state.isLoading = false
                }
            })
            .addCase(getMenu.fulfilled, (state, {payload}) => {
                state.isLoading = false 
                state.items = payload;
            })
            .addCase(getMenu.rejected, (state) => { 
                state.isLoading = false
            })
            .addCase(getTotalPage.fulfilled, (state, {payload}) => {
                state.isLoading = false 
                state.totalPages = payload.count;
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