import { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  background-color: #fff;
  border-bottom: 1px solid #ececec;
  margin-bottom: 0;
  height: 56px;
  border-radius: 0;
  padding-right: 25px;
  padding-left: 0;
`;
export type NavProps = {
  children?: ReactNode;
};
export const Nav: FC<NavProps> = ({ children }) => {
  return <StyledNav>{children}</StyledNav>;
};
