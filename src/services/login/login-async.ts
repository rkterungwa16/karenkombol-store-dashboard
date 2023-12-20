import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./login-api";

export const loginUserAsync = createAsyncThunk(
  "users/login",
  async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    thunkAPI,
  ) => {
    const response = await login({
      email,
      password,
    });
    thunkAPI.dispatch({
      type: "users/login-success",
    });
    return response?.data?.accessToken;
  },
);
