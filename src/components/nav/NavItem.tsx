import { ReactElement, forwardRef } from "react";
import { Link, LinkProps } from "../link";
import { mapNavItemElements } from "./styles";
import { generateStyledComponentPropKeys } from "../../utils/styledComponentPropKeys";
import { BoxAreaProps } from "../../utils/box-area";

export interface NavItemProps extends LinkProps, BoxAreaProps {
  icon?: ReactElement;
  component?: string;
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
      component = 'li',
      ...others
    },
    ref,
  ) => {
    if (href || customLink?.props?.to) {
      children = (
        <Link
          className={className}
          active={active}
          disabled={disabled}
          // {...others}
          href={href}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    }
    const Component = mapNavItemElements[component]
    return (
      <Component
        className={className}
        ref={ref}
        {...generateStyledComponentPropKeys(others)}
      >
        {icon && icon}
        {children}
      </Component>
    );
  },
);
