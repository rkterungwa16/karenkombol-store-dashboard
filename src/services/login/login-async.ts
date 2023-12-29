import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, refreshToken } from "./login-api";
import { RequestWithPayloadOptions } from "../types";
import { LoginData } from "./types";

export const loginUserAsync = createAsyncThunk(
  "users/login",
  async (requestOptions: RequestWithPayloadOptions<LoginData>, thunkAPI) => {
    const response = await login(requestOptions);
    if (response?.data) {
      return response;
    }
    return thunkAPI.rejectWithValue(response);
  },
);

export const refreshUserLoginAsync = createAsyncThunk(
  "users/refresh-login",
  async (token: string, thunkAPI) => {
    const response = await refreshToken(token);
    if (response?.data) {
      thunkAPI.dispatch({
        type: "users/refresh-login-success",
      });
      return response;
    }
    return thunkAPI.rejectWithValue(response);
  },
);
