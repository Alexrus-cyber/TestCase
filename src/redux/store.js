import {
    combineReducers,
    configureStore,
  } from "@reduxjs/toolkit";

import menuReducer from "./slices/main";
import basketReducer from "./slices/basket";
import galleryReducer from "./slices/favorite";


const rootReducer = combineReducers({
    menu: menuReducer,
    basket: basketReducer,
    favorite: galleryReducer,
  });

export const store = configureStore({
    reducer: rootReducer,
})


