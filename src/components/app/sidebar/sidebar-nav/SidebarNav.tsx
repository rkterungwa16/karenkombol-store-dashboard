import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  BoxAreaProps,
  StyledBoxAreaProps,
  generateComponentBoxAreaStyle,
} from "../../../../utils/box-area";
import { generateStyledComponentPropKeys } from "../../../../utils/styledComponentPropKeys";

export interface StyledSidebarNavProps extends StyledBoxAreaProps {
  children?: ReactNode;
  $className?: string;
}

export const StyledSidebarNav = styled.ul`
  position: relative;
  display: flex;
  flex: 1 1;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  list-style: none;
  ${(props: StyledSidebarNavProps) => {
    const style = `
      ${generateComponentBoxAreaStyle({
        ...props,
      })}
    `;
    return style;
  }}
`;

export interface SidebarNavProps extends BoxAreaProps {
  children?: ReactNode;
}

export const SidebarNav: FC<SidebarNavProps> = ({ children, ...others }) => (
  <StyledSidebarNav {...generateStyledComponentPropKeys(others)}>
    {children}
  </StyledSidebarNav>
);
