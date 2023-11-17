import styled from "styled-components";
import { FC, ReactNode } from "react";

export const StyledSidebarNav = styled.nav`
  position: relative;
  display: flex;
  flex: 1 1;
  flex-direction: column;
  padding: 0;
  margin-bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  list-style: none;
`;

export type SidebarNavProps = {
  children?: ReactNode;
};

export const SidebarNav: FC<SidebarNavProps> = ({
  children,
}) => <StyledSidebarNav>{children}</StyledSidebarNav>;
