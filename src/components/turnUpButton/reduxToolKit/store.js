import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./slice";

const store = configureStore({
  reducer: {
    showing: showReducer,
  },
});

export default store;
