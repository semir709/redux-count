import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../feauteres/counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
