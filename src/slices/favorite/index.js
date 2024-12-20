import {
    createAsyncThunk,
    createSelector,
    createSlice,
  } from "@reduxjs/toolkit";

const initialState = {
    items: [],    
    loading: false,
    error: null,
};

export const editFavorite = createAsyncThunk(
    'editFavorite',
    async ({ itemId, ...items }, { rejectWithValue }) => {
        try {
            const data = {
                ...items,
                id: itemId,
                favorite: true
            };
            return data;
        } catch (error) {
            console.error('Ошибка при обновлении:', error); // Логируем ошибку
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
export const deleteFavorite = createAsyncThunk(
    'deleteFavorite',
    async ({ itemId, ...items }, { rejectWithValue }) => {
        try {
            const data = {
                ...items,
                favorite: false
            };
            return data;
        } catch (error) {
            console.error('Ошибка при обновлении:', error); // Логируем ошибку
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);


export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(editFavorite.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.items = [...state.items,payload]; 
            })
            .addCase(deleteFavorite.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.items = state.items.filter((el) => el.id !== payload.id);
            })
    },
});
const stateSelector = (state) => state?.favorite;

export const favoriteSelector = createSelector(
    stateSelector,
    (state) => state.items
);

export default favoriteSlice.reducer;