import { ReactNode } from "react";
import styled from "styled-components";
import {
  StyledBoxAreaProps,
  generateComponentBoxAreaStyle,
} from "../../utils/box-area";

export interface StyledLiProps extends StyledBoxAreaProps {
  children?: ReactNode;
  $className?: string;
}

export const StyledLi = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  ${(props: StyledLiProps) => {
    const style = `
      ${generateComponentBoxAreaStyle({
        ...props,
      })}
    `;
    return style;
  }}
`;
