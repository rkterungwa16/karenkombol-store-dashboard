import { FC } from "react";
import styled from "styled-components";
import { StyledPageWrapper } from "./styles";
import { LayoutProps } from "./types";

export const StyledPageComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
`;

export const Layout: FC<LayoutProps> = ({ children, ...others }) => (
  <StyledPageWrapper {...others}>{children}</StyledPageWrapper>
);
