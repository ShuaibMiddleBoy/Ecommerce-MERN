import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("auth"),
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
