import {
    combineReducers,
    configureStore,
  } from "@reduxjs/toolkit";

import menuReducer from "../slices/main";
import basketReducer from "../slices/basket";
import favoriteReducer from "../slices/favorite";


const rootReducer = combineReducers({
    menu: menuReducer,
    basket: basketReducer,
    favorite: favoriteReducer,
  });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Отключаем проверку сериализации
    }),
});
