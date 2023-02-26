import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const showSlice = createSlice({
  name: "showing",
  initialState,
  reducers: {
    showButton: (state) => {
      state.value = true;
    },
    hideButton: (state) => {
      state.value = false;
    },
  },
});

export default showSlice.reducer;
export const { showButton, hideButton } = showSlice.actions;
