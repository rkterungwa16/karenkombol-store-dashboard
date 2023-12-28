import { FC, ReactNode } from "react";

import { AppSidebar } from "./AppSidebar";
import { Container } from "../container/Container";

export type AppProps = {
  children?: ReactNode;
};
export const AppContainer: FC<AppProps> = ({ children }) => {
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
