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
    itemsFavorite: [],
    itemsBasket: [],
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
            console.log(data);
            return data;
        } catch (error) {
            console.error('Ошибка при обновлении:', error); // Логируем ошибку
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const editBasket = createAsyncThunk(
    'editBasket',
    async ({ itemId, ...items }, { rejectWithValue }) => {
        try {
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
    async ({ itemId, ...items }, { rejectWithValue }) => {
        try {
            const data = {
                ...items,
                basket: false
            };
            console.log(data);
            return data;
        } catch (error) {
            console.error('Ошибка при обновлении:', error); // Логируем ошибку
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

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
            .addCase(editFavorite.fulfilled, (state, {payload}) => {
              state.isLoading = false
              state.itemsFavorite = [...state.itemsFavorite,payload]; 
            })
            .addCase(deleteFavorite.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.itemsFavorite = state.itemsFavorite.filter((el) => el.id !== payload.id);
            })
            .addCase(editBasket.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.itemsBasket = [...state.itemsBasket,payload]; 
                console.log(state.itemsBasket);
            })
            .addCase(deleteBasket.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.itemsBasket = state.itemsBasket.filter((el) => el.id !== payload.id);
            });
    },
});
const { reducer } = menuSlice;

const stateSelector = (state) => state?.menu;

export const setCurrentPage = menuSlice.actions.setCurrentPage;

export const listMenuSelector = createSelector(
    stateSelector,
    (state) => state.items
  );

export const favoriteSelector = createSelector(
    stateSelector,
    (state) => state.itemsFavorite
);
export const basketSelector = createSelector(
    stateSelector,
    (state) => state.itemsBasket
);


export default reducer;