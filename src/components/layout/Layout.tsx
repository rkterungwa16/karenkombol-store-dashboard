import styled from "styled-components";
import { FC, ReactNode } from "react";

export const StyledPageComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
`;

export const StyledPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => (
  <StyledPageWrapper>
    <StyledPageComponentsWrapper>{children}</StyledPageComponentsWrapper>
  </StyledPageWrapper>
);
