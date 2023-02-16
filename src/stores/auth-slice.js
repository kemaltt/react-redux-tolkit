import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  isAuthenticated: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },

    login: (state, action) => {
      state.isAuthenticated = true;
    },

    logout: (state, action) => {
      state.isAuthenticated = false;
      state.users = null;
    },
  },
});

export const { setUsers, login, logout } = auth.actions;

export default auth.reducer;
