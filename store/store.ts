import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; // Import your slice reducers
import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Example slice reducer
    categories: categoriesReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
