import { AllHTMLAttributes, ElementType } from "react";

export interface LinkAttrProps extends AllHTMLAttributes<HTMLElement> {
  active?: boolean;
  className?: string;
  disabled?: boolean;
  href?: string;
}

export interface LinkProps
  extends LinkAttrProps,
    AllHTMLAttributes<HTMLElement> {
  component?: string | ElementType;
}
