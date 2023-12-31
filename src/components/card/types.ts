import { ReactNode, CSSProperties, ReactElement } from "react";
import { BoxAreaProps, StyledBoxAreaProps } from "../../utils/box-area";

export interface CardProps extends BoxAreaProps {
  children?: ReactNode;
  body?: ReactElement;
  header?: ReactElement;
  footer?: ReactElement;

  position?: CSSProperties["position"];
  top?: CSSProperties['top'];
  bottom?: CSSProperties['bottom'];
  left?: CSSProperties['left'];
  right?: CSSProperties['right'];
  display?: CSSProperties["display"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flexDirection?: CSSProperties["flexDirection"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  zIndex?: CSSProperties['zIndex'];

  minWidth?: CSSProperties["minWidth"];
  wordWrap?: CSSProperties["wordWrap"];
  backgroundColor?: CSSProperties["backgroundColor"];
  backgroundClip?: CSSProperties["backgroundClip"];
  border?: CSSProperties["border"];
  borderRadius?: CSSProperties["borderRadius"];
  className?: string;
}

export interface StyledCardProps extends StyledBoxAreaProps {
  children?: ReactNode;
  $position?: CSSProperties["position"];
  $top?: CSSProperties['top'];
  $bottom?: CSSProperties['bottom'];
  $left?: CSSProperties['left'];
  $right?: CSSProperties['right'];
  $display?: CSSProperties["display"];
  $justifyContent?: CSSProperties["justifyContent"];
  $flexDirection?: CSSProperties["flexDirection"];
  $alignItems?: CSSProperties["alignItems"];
  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];
  $zIndex?: CSSProperties['zIndex'];

  $minWidth?: CSSProperties["minWidth"];
  $wordWrap?: CSSProperties["wordWrap"];
  $backgroundColor?: CSSProperties["backgroundColor"];
  $backgroundClip?: CSSProperties["backgroundClip"];
  $border?: CSSProperties["border"];
  $borderRadius?: CSSProperties["borderRadius"];
  $className?: string;
}
