import styled from "styled-components";
import { FC, ReactNode } from "react";
import { SidebarHeader } from "./SidebarHeader";

export const StyledSidebar = styled.div`
  width: 300px;
  background: #716272cc;
  min-height: 100%;
  float: left;
  z-index: 100;
  position: relative;
`;

export type SidebarProps = {
  children?: ReactNode;
};

export const Sidebar: FC<SidebarProps> = ({ children }) => (
  <StyledSidebar>
    <SidebarHeader />
    {children}
  </StyledSidebar>
);
