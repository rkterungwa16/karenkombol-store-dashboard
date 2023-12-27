import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, refreshToken } from "./login-api";
import { RequestWithPayloadOptions } from "../types";
import { LoginData } from "./types";

export const loginUserAsync = createAsyncThunk(
  "users/login",
  async (requestOptions: RequestWithPayloadOptions<LoginData>) => {
    const response = await login(requestOptions);
    if (response?.data) {
      return response?.data;
    }
    throw new Error(response?.message);
  },
);

export const refreshUserLoginAsync = createAsyncThunk(
  "users/refresh-login",
  async (token: string, thunkAPI) => {
    try {
      const response = await refreshToken(token);
      thunkAPI.dispatch({
        type: "users/refresh-login-success",
      });
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        token: "",
      });
    }
  },
);
