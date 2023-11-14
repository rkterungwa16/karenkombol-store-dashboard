import { ReactNode, CSSProperties } from "react";

export interface LayoutProps {
  children: ReactNode;
  display?: "flex" | "none";
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}
