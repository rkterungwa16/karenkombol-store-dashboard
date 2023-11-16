import { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 0px;
  margin: 0;
  border-bottom: none;
  height: 56px;
  position: relative;
  padding-top: 0;
  padding-right: 0;
  background: #ffffff;
  z-index: 1000;
`;
export type HeaderProps = {
  children?: ReactNode;
};
export const Header: FC<HeaderProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
