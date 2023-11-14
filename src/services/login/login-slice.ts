import { createSlice } from "@reduxjs/toolkit";
import { loginUserAsync } from "./login-async";

export interface LoginState {
  token: string;
}

const initialState: LoginState = {
  token: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginUserAsync.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});

export default loginSlice.reducer;
