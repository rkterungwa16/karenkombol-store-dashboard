import { Navigate, useLocation } from "react-router-dom";

import { ClientRoutes } from "../../routes/client";
import { useSelector } from "react-redux";
import { loginSelector } from "../../services/login/login-selector";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const loginData = useSelector(loginSelector);
  const location = useLocation();
  const token = loginData?.token;

  // if no token in redux store, get refresh token from local storage. refresh to get new access token
  // every access token is connected with its refresh token.
  // - Every refresh makes previous refresh token invalid. and previous access token is invalid.
  // - Every refresh token expiration will make the user to login again. And create a new token

  if (!token) {
    return (
      <Navigate
        to={ClientRoutes.LOGIN}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
