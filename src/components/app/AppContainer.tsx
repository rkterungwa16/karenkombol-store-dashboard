import { FC, ReactNode, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppSidebar } from "./AppSidebar";
import { Container } from "../container/Container";
import { loginSelector } from "../../services/login/login-selector";
import { AppDispatch } from "../../store";
import { fetchRolesAsync } from "../../services/roles/roles-async";

export type AppProps = {
  children?: ReactNode;
};
export const AppContainer: FC<AppProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const loginData = useSelector(loginSelector);

  const handleNavigate = useCallback(() => {
    if (loginData?.token) {
      dispatch(fetchRolesAsync({
        headers: {
          authorization: `Bearer ${loginData.token}`,
        }
      }));
    }
  }, [loginData, dispatch]);

  useEffect(() => {
    handleNavigate();
  }, [handleNavigate]);
  console.log("loginData", loginData);
  return (
    <Container
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p="p-0"
    >
      <AppSidebar />
      {children}
    </Container>
  );
};

export default AppContainer;
