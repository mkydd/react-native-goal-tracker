import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";
import goalsReducer from "./slices/goalsSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
    goals: goalsReducer,
  },
});

export default store;
