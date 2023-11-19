import { forwardRef } from "react";
import { Link, LinkProps } from "../link";

export const NavItem = forwardRef<HTMLLIElement, LinkProps>(
  ({ children, className, href, customLink, ...rest }, ref) => {
    console.log('href', href);
    if (href || customLink?.props?.to) {
       console.log('href', customLink);
      children = (
        <Link className={className} {...rest} href={href}>
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
