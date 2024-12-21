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

export const editBasket = createAsyncThunk(
    'editBasket',
    async (items, { rejectWithValue }) => {
        try {
            console.log(items)
            const data = {
                ...items,
                basket: true
            };
            return data;
        } catch (error) {
            console.error('Ошибка при обновлении:', error); // Логируем ошибку
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
export const deleteBasket = createAsyncThunk(
    'deleteBasket',
    async (items, { rejectWithValue }) => {
        try {
            const data = {
                ...items,
                basket: false
            };
            return data;
        } catch (error) {
            console.error('Ошибка при обновлении:', error); // Логируем ошибку
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
        .addCase(editBasket.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.items = [...state.items,payload];
        })
        .addCase(deleteBasket.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.items = state.items.filter((el) => el.id !== payload.id);
        })
    },
});
const stateSelector = (state) => state?.basket;

export const basketSelector = createSelector(
    stateSelector,
    (state) => state.items
);
export default basketSlice.reducer;