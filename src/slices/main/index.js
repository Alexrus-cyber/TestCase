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
  export let updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map((value) => {
      if (value[objPropName] === itemId) {
        return { ...value, ...newObjProps };
      }
      return value;
    });
  };

export const getMenu = createAsyncThunk(
    'getMenu',
    async (data, { rejectWithValue }) => {
        try {
            const response = await instance
            .get(`items?_limit=${6}`)
            .then((response) => response);
            console.log(response);
            return response.data;

        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const editMenu = createAsyncThunk(
    'editMenu',
    async ({id, ...data}, { rejectWithValue, dispatch }) => {
        try {
            console.log(id, data.available);
            const response = await instance
            .put(`items/${id}`, {...data, favorite: data.favorite})
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
    },
});
const { reducer } = menuSlice;

const stateSelector = (state) => state?.menu;

export const listMenuSelector = createSelector(
    stateSelector,
    (state) => state.items
  );

export default reducer;