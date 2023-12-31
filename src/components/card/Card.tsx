import { forwardRef } from "react";
import { StyledCard } from "./styles";
import { CardProps } from "./types";
import { generateStyledComponentPropKeys } from "../../utils/styledComponentPropKeys";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, body, footer, header, ...others }, ref) => {
    return (
      <StyledCard ref={ref} {...generateStyledComponentPropKeys(others)}>
        {header ? header : null}
        {body ? body : null}
        {footer ? footer : null}
        {children}
      </StyledCard>
    );
  },
);

Card.displayName = "Card";
