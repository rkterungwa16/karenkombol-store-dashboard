import styled from "styled-components";
import { generateComponentBoxAreaStyle } from "../../utils/box-area";
import { StyledCardProps } from "./types";

export const StyledCard = styled.div`
  ${(props: StyledCardProps) => {
    const {
      $width,
      $height,
      $zIndex,
      $top,
      $bottom,
      $left,
      $right,
      $display,
      $justifyContent,
      $alignItems,
      $flexDirection,
      $minWidth,
      $wordWrap,
      $backgroundColor,
      $backgroundClip,
      $border,
      $borderRadius,
      $position,
      ...others
    } = props;
    const style = `
      ${$position ? `position: ${$position};` : "relative;"}
      ${$width ? `width: ${$width};` : ""}
      ${$height ? `height: ${$height};` : ""}
      ${$zIndex ? `z-index: ${$zIndex};` : ""}
      ${$top ? `top: ${$top};` : ""}
      ${$bottom ? `bottom: ${$bottom};` : ""}
      ${$left ? `right: ${$left};` : ""}
      ${$right ? `right: ${$right};` : ""}
      ${$minWidth ? `min-width: ${$minWidth};` : "0;"}
      ${$wordWrap ? `word-wrap: ${$wordWrap};` : "break-word;"}
      ${$backgroundColor ? `background-color: ${$backgroundColor};` : "#fff;"}
      ${$backgroundClip ? `background-clip: ${$backgroundClip};` : "border-box;"}
      ${$border ? `border: ${$border};` : "1px solid transparent;"}
      ${$borderRadius ? `border-radius: ${$borderRadius};` : "0.25rem;"}

      ${$display ? `display: ${$display};` : "flex"}
      ${$justifyContent ? `justify-content: ${$justifyContent};` : ""}
      ${$alignItems ? `align-items: ${$alignItems};` : ""}
      ${$flexDirection ? `flex-direction: ${$flexDirection};` : "column;"}
      ${generateComponentBoxAreaStyle({
        ...others,
      })}
    `;

    return style;
  }}
`;
