import { forwardRef } from "react";
import { StyledHeaderContainer } from "./styles";
import { ContainerProps } from "./types";
import { generateStyledComponentPropKeys } from "../../utils/styledComponentPropKeys";

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...others }, ref) => {
    return (
      <StyledHeaderContainer ref={ref} {...generateStyledComponentPropKeys(others)}>
        {children}
      </StyledHeaderContainer>
    );
  },
);

Container.displayName = "Container";
