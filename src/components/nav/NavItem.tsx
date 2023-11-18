import { forwardRef } from "react";
import { Link, LinkProps } from "../link";

export const NavItem = forwardRef<HTMLLIElement, LinkProps>(
  ({ children, className, ...rest }, ref) => {
    if (rest.href || rest.customLink?.props?.to) {
      children = (
        <Link className={className} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <li className={className} ref={ref}>
        {children}
      </li>
    );
  },
);
