import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: false,
};

const thema = createSlice({
  name: "thema",
  initialState,
  reducers: {
    setDark: (state, action) => {
      state.dark = true;
    },
    setLight: (state, action) => {
      state.dark = false;
    },
  },
});

export const { setDark, setLight } = thema.actions;

export default thema.reducer;
