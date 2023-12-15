import { CSSProperties, ElementType, ReactNode } from "react";
import styled from "styled-components";
import {
  StyledBoxAreaProps,
  generateComponentBoxAreaStyle,
} from "../../utils/box-area";

export interface StyledNavItemElementProps extends StyledBoxAreaProps {
  children?: ReactNode;
  $className?: string;
  $display?: CSSProperties["display"];
  $alignItems?: CSSProperties["alignItems"];
  $justifyContent?: CSSProperties["justifyContent"];
  $active?: boolean;
  $hover?: {
    background: CSSProperties["background"];
    color: CSSProperties["color"];
  };
}

export const StyledNavItemLi = styled.li`
  width: 100%;
  cursor: pointer;
  ${(props: StyledNavItemElementProps) => {
    const { $alignItems, $display, $hover, $active, ...others } = props;
    const alignItems = $alignItems ? `align-items: ${$alignItems};` : "";
    const display = $display ? `display: ${$display}` : "";
    const active = $active
      ? `background: ${$hover?.background};
    color: ${$hover?.color};`
      : "";

    const hover = $hover
      ? `&:hover {
      background: ${$hover.background};
      color: ${$hover.color};
    }`
      : "";
    const style = `
      ${alignItems};
      ${display};
      ${hover};
      ${active};
      ${generateComponentBoxAreaStyle({
        ...others,
      })}
    `;
    return style;
  }}
`;

export const StyledNavItemDiv = styled.div`
  width: 100%;
  cursor: pointer;
  ${(props: StyledNavItemElementProps) => {
    const { $alignItems, $display, $hover, $active, ...others } = props;
    const alignItems = $alignItems ? `align-items: ${$alignItems};` : "";
    const display = $display ? `display: ${$display}` : "";
    const active = $active
      ? `background: ${$hover?.background};
    color: ${$hover?.color};`
      : "";

    const hover = $hover
      ? `&:hover {
      background: ${$hover.background};
      color: ${$hover.color};
    }`
      : "";
    const style = `
      ${alignItems};
      ${display};
      ${hover};
      ${active};
      ${generateComponentBoxAreaStyle({
        ...others,
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
