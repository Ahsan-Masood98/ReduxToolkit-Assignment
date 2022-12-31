import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/counterSlice";
import postReducer from "../Slices/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});
