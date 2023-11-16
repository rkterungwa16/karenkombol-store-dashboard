import styled from "styled-components";
import { FC, ReactNode } from "react";

export const StyledSidebarHeader = styled.div`
  width: 100%;
  color: #fff;
  background: #716272;
  font-weight: 800;
  font-size: 18px;
  display: block;
  text-decoration: none;
  z-index: 9999;
  text-transform: uppercase;
  line-height: 30px;
  height: 56px;
`;

// TODO: implement header component that will be used in both content and sidebar
export type SidebarHeaderProps = {
  children?: ReactNode;
};

export const SidebarHeader: FC<SidebarHeaderProps> = ({
  children,
}) => <StyledSidebarHeader>{children}</StyledSidebarHeader>;
