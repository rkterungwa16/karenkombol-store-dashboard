import { ReactElement, forwardRef } from "react";
import { CustomLink, LinkAttrProps } from "../link";
import { mapNavItemElements } from "./styles";
import { generateStyledComponentPropKeys } from "../../utils/styledComponentPropKeys";
import { BoxAreaProps } from "../../utils/box-area";
import { StyledRouterLink } from "../link/styles";

export interface NavItemProps extends LinkAttrProps, BoxAreaProps {
  icon?: ReactElement;
  component?: string;
}
export const NavItem = forwardRef<HTMLLIElement, NavItemProps>(
  (
    {
      children,
      className,
      href,
      icon,
      onClick,
      active,
      disabled,
      component = 'li',
      ...others
    },
    ref,
  ) => {
    if (href) {
      children = (
        <CustomLink
          className={className}
          active={active}
          disabled={disabled}
          // {...others}
          onClick={onClick}
          customLink={{
            component: StyledRouterLink,
            props: {
              to: href
            }
          }}
        >
          {children}
        </CustomLink>
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
