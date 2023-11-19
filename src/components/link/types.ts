import { ElementType, MouseEventHandler, ReactNode } from "react";

export interface LinkAttrProps {
  active?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  children?: ReactNode;
  href?: string;
}

export type CustomLinkProps = Record<string, unknown>;
export interface LinkProps extends LinkAttrProps {
  customLink?: {
    component: ElementType;
    props: CustomLinkProps;
  };
}
