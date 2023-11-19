import { ReactElement, forwardRef } from "react";
import { Link, LinkProps } from "../link";
import { StyledLi } from "./styles";
import { generateStyledComponentPropKeys } from "../../utils/styledComponentPropKeys";
import { BoxAreaProps } from "../../utils/box-area";

export interface NavItemProps extends LinkProps, BoxAreaProps {
  icon?: ReactElement;
}
export const NavItem = forwardRef<HTMLLIElement, NavItemProps>(
  (
    {
      children,
      className,
      href,
      customLink,
      icon,
      onClick,
      active,
      disabled,
      ...others
    },
    ref,
  ) => {
    console.log("href", href);
    if (href || customLink?.props?.to) {
      children = (
        <Link
          className={className}
          active={active}
          disabled={disabled}
          {...others}
          href={href}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    }
    return (
      <StyledLi
        className={className}
        ref={ref}
        {...generateStyledComponentPropKeys(others)}
      >
        {icon && icon}
        {children}
      </StyledLi>
    );
  },
);
