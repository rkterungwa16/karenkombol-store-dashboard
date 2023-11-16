import { forwardRef } from "react";
import classNames from "classnames";
import { LinkProps } from "./types";

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, active, className, disabled, href, ...rest }, ref) => {
    return (
      <Link href={href}>
        <a
          className={classNames(className, { active, disabled })}
          {...(active && { "aria-current": "page" })}
          {...(disabled && { "aria-disabled": true, tabIndex: -1 })}
          {...rest}
          ref={ref}
        >
          {children}
        </a>
      </Link>
    );
  },
);
