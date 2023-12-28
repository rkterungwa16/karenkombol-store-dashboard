import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Content } from "../../components/app/content/Content";
import AppContainer from "../../components/app/AppContainer";

import { loginSelector } from "../../services/login/login-selector";
import { fetchRolesAsync } from "../../services/roles/roles-async";
import { AppDispatch } from "../../store";

export const Roles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loginData = useSelector(loginSelector);

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
  return (
    <AppContainer>
      <Content></Content>
    </AppContainer>
  );
};

export default Roles;
