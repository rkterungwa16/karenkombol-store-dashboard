import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRoles } from "./roles-api";

export const fetchRolesAsync = createAsyncThunk(
  "roles/fetch",
  async () => {
    try {
      const response = await fetchRoles();
      return response?.data;
    } catch (error) {
      return error;
    }
  },
);

