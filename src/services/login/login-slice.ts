import { createSlice } from "@reduxjs/toolkit";
import { loginUserAsync, refreshUserLoginAsync } from "./login-async";
import { LoginState } from "./types";
import { setAccessToken } from "./login-actions";

const initialState: LoginState = {
  token: "",
  refreshToken: "",
  error: "",
  status: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.token = action.payload.data.accessToken;
        state.refreshToken = action.payload.data.refreshToken;
        state.status = action.payload.status;
        window?.sessionStorage.setItem(
          "kka-access-token",
          action.payload.accessToken,
        );
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        const payload = action?.payload as {
          message: string;
          status: number | null;
        };
        state.error = payload?.message || "";
        state.status = payload?.status || null;
      })
      .addCase(refreshUserLoginAsync.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(refreshUserLoginAsync.rejected, (state) => {
        state.token = "";
        state.refreshToken = "";
      })
      .addCase(setAccessToken, (state, action) => {
        state.token = action.payload;
      });
  },
});

export default loginSlice.reducer;
