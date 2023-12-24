import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRoles } from "./roles-api";
import { RequestOptions } from "../types";

export const fetchRolesAsync = createAsyncThunk(
  "roles/fetch",
  async (requestOptions: RequestOptions) => {
    try {
      const response = await fetchRoles(requestOptions);
      return response?.data;
    } catch (error) {
      return error;
    }
  },
);

