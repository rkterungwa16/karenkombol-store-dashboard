import { createAction } from "@reduxjs/toolkit";

export const setAccessToken = createAction<string>("users/set-access-token");
