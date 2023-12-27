import { createSlice } from "@reduxjs/toolkit";
import { loginUserAsync, refreshUserLoginAsync } from "./login-async";
import { LoginState } from "./types";

const initialState: LoginState = {
  token: "",
  refreshToken: "",
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.error = action?.error?.message || "";
      })
      .addCase(refreshUserLoginAsync.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(refreshUserLoginAsync.rejected, (state) => {
        state.token = "";
        state.refreshToken = "";
      });
  },
});

export default loginSlice.reducer;
