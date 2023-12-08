import { CSSProperties, ReactElement, forwardRef } from "react";
import { CustomLink, LinkAttrProps } from "../link";
import { mapNavItemElements } from "./styles";
import { generateStyledComponentPropKeys } from "../../utils/styledComponentPropKeys";
import { BoxAreaProps } from "../../utils/box-area";
import { StyledRouterLink } from "../link/styles";

export interface NavItemProps extends LinkAttrProps, BoxAreaProps {
  icon?: ReactElement;
  component?: string;
  display?: CSSProperties["display"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  hover?: {
    background: CSSProperties["background"];
    color: CSSProperties["color"];
  };
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
      component = "li",
      hover,
      ...others
    },
    ref,
  ) => {
    if (href) {
      const Component = mapNavItemElements[component];
      return (
        <Component
          $hover={hover}
          ref={ref}
          {...generateStyledComponentPropKeys(others)}
        >
          {icon && icon}
          <CustomLink
            className={className}
            active={active}
            disabled={disabled}
            // {...others}
            onClick={onClick}
            customLink={{
              component: StyledRouterLink,
              props: {
                to: href,
              },
            }}
          >
            {children}
          </CustomLink>
        </Component>
      );
    }
    const Component = mapNavItemElements[component];
    return (
      <Component
        className={className}
        $hover={hover}
        ref={ref}
        {...generateStyledComponentPropKeys(others)}
        onClick={onClick}
      >
        {icon && icon}
        {children}
      </Component>
    );
  },
);
