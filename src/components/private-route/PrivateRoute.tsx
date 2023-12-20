import { Navigate, useLocation } from "react-router-dom";

import { ClientRoutes } from "../../routes/client";
import { useSelector } from "react-redux";
import { loginSelector } from "../../services/login/login-selector";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const loginData = useSelector(loginSelector);
  const location = useLocation();
  const token = loginData?.token;

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
