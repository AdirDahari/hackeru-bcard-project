import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: false,
};

const darkTheme = createSlice({
  name: "auth",
  initialState,
  reducers: {
    darkTheme(state) {
      state.darkTheme = true;
    },
    lightTheme(state) {
      state.darkTheme = false;
    }
  },
});

export const darkThemeActions = darkTheme.actions;

export default darkTheme.reducer;
