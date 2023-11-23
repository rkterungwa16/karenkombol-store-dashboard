import { ElementType, ReactNode } from "react";
import styled from "styled-components";
import {
  StyledBoxAreaProps,
  generateComponentBoxAreaStyle,
} from "../../utils/box-area";

export interface StyledNavItemElementProps extends StyledBoxAreaProps {
  children?: ReactNode;
  $className?: string;
}

export const StyledNavItemLi = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  ${(props: StyledNavItemElementProps) => {
    const style = `
      ${generateComponentBoxAreaStyle({
        ...props,
      })}
    `;
    return style;
  }}
`;

export const StyledNavItemDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  ${(props: StyledNavItemElementProps) => {
    const style = `
      ${generateComponentBoxAreaStyle({
        ...props,
      })}
    `;
    return style;
  }}
`;

export const mapNavItemElements: {
  [element: string]: ElementType;
} = {
  li: StyledNavItemLi,
  div: StyledNavItemDiv,
};
