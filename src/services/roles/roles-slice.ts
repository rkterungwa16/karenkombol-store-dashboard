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
  status: number | null;
  roles: Role[];
  error: string;
}

const initialState: RolesState = {
  status: null,
  roles: [],
  error: "",
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
        state.roles = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(fetchRolesAsync.rejected, (state, action) => {
        const payload = action?.payload as {
          message: string;
          status: number | null;
        };
        state.error = payload?.message || "";
        state.status = payload?.status || null;
      });
  },
});

export default rolesSlice.reducer;
