import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRoles } from "./roles-api";
import { RequestOptions } from "../types";

export const fetchRolesAsync = createAsyncThunk(
  "roles/fetch",
  async (requestOptions?: RequestOptions) => {
    const response = await fetchRoles(requestOptions);
    if (response?.data) {
      return response?.data;
    }
    throw new Error(response?.message);
  },
);

