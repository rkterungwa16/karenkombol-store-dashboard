import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Content } from "../../components/app/content/Content";
import AppContainer from "../../components/app/AppContainer";

import { loginSelector } from "../../services/login/login-selector";
import { fetchRolesAsync } from "../../services/roles/roles-async";
import { AppDispatch } from "../../store";
import { ClientRoutes } from "../../routes/client";
import { rolesSelector } from "../../services/roles/roles-selector";

export const Roles = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const loginData = useSelector(loginSelector);
  const rolesData = useSelector(rolesSelector);

  const handleFetchRoles = useCallback(() => {
    if (loginData?.token) {
      dispatch(
        fetchRolesAsync({
          headers: {
            authorization: `Bearer ${loginData.token}`,
          },
        }),
      );
    }
  }, [loginData, dispatch]);

  useEffect(() => {
    handleFetchRoles();
  }, [handleFetchRoles]);

  const handleNavigate = useCallback(() => {
    if (rolesData?.error && rolesData?.status === 401) {
      navigate(ClientRoutes.LOGIN, { replace: true });
    }
  }, [rolesData, navigate]);

  useEffect(() => {
    handleNavigate();
  }, [handleNavigate]);

  console.log("roles data", rolesData);
  return (
    <AppContainer>
      <Content></Content>
    </AppContainer>
  );
};

export default Roles;
