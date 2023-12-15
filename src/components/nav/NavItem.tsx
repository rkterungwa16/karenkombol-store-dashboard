import { CSSProperties, ElementType, ReactElement, forwardRef } from "react";
import { CustomLink, CustomLinkProps, LinkAttrProps } from "../link";
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
  active?: boolean;
  hover?: {
    background: CSSProperties["background"];
    color: CSSProperties["color"];
  };
  customLink?: {
    component?: ElementType;
    props?: CustomLinkProps;
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
      customLink,
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
          $active={active}
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
                ...(customLink &&
                  customLink.props && {
                    ...customLink.props,
                  }),
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
        $active={active}
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
