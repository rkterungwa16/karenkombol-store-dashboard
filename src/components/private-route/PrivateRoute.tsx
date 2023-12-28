import { Navigate, useLocation } from "react-router-dom";

import { ClientRoutes } from "../../routes/client";
import { setAccessToken } from "../../services/login/login-actions";
import { useDispatch } from "react-redux";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = window?.sessionStorage.getItem("kka-access-token");

  // if no token in redux store, get refresh token from local storage. refresh to get new access token
  // every access token is connected with its refresh token.
  // - Every refresh makes previous refresh token invalid. and previous access token is invalid.
  // - Every refresh token expiration will make the user to login again. And create a new token
  // If a user has access to refresh token, use it to get a new access token. But will that be a problem?

  if (!token) {
    return (
      <Navigate
        to={ClientRoutes.LOGIN}
        state={{ from: location.pathname }}
        replace
      />
    );
  }
  console.log('token', token);
  dispatch(setAccessToken(token));

  return children;
};

export default PrivateRoute;
