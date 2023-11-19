import { forwardRef } from "react";
import classNames from "classnames";
import { LinkProps } from "./types";
import { StyledLink } from "./styles";

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { children, active, className, customLink, disabled, href, ...rest },
    ref,
  ) => {
    console.log('___link__href', href);
    console.log('___link__custom link', customLink)
    if (customLink) {
      const customLinkProps = customLink.props;
      const Component = customLink.component;
      return (
        <Component
          className={classNames(className, { active, disabled })}
          {...(active && { "aria-current": "page" })}
          {...(disabled && { "aria-disabled": true, tabIndex: -1 })}
          {...rest}
          ref={ref}
          href={href}
          {...customLinkProps}
        >
          {children}
        </Component>
      );
    }
    return (
      <StyledLink
        className={classNames(className, { active, disabled })}
        {...(active && { "aria-current": "page" })}
        {...(disabled && { "aria-disabled": true, tabIndex: -1 })}
        {...rest}
        ref={ref}
      >
        {children}
      </StyledLink>
    );
  },
);
