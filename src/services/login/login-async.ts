import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, refreshToken } from "./login-api";
import { RequestOptions } from "../types";
import { LoginData } from "./types";

export const loginUserAsync = createAsyncThunk(
  "users/login",
  async (requestOptions: RequestOptions<LoginData>, thunkAPI) => {
    try {
      const response = await login(requestOptions);
      thunkAPI.dispatch({
        type: "users/login-success",
      });
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        token: "",
      });
    }
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
