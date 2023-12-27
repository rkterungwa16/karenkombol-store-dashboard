import { createSlice } from "@reduxjs/toolkit";
import { fetchRolesAsync } from "./roles-async";

export type Permission = {
  id: string;
  resource: string;
  action: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Role = {
  id: string;
  name: string;
  slug: string;
  permissions: (string | Permission)[];
  createdAt?: Date;
  updatedAt?: Date;
};

export interface RolesState {
  roles: Role[];
  error: string;
}

const initialState: RolesState = {
  roles: [],
  error: ""
};
// Add error states.
export const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchRolesAsync.fulfilled, (state, action) => {
        state.roles = action.payload;
      })
      .addCase(fetchRolesAsync.rejected, (state, action) => {
        state.error = action?.error?.message || "";
      });
  },
});

export default rolesSlice.reducer;
