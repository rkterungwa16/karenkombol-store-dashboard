import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./services/login/login-slice";
import rolesReducer from "./services/roles/roles-slice"

export const store = configureStore({
  reducer: {
    login: loginReducer,
    roles: rolesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
