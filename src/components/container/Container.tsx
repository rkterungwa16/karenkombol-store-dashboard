import { forwardRef } from "react";
import { StyledHeaderContainer } from "./styles";
import { ContainerProps } from "./types";
import { mapStyledComponentPropKeys } from "../../utils/styledComponentPropKeys";

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...others }, ref) => {
    return (
      <StyledHeaderContainer ref={ref} {...mapStyledComponentPropKeys(others)}>
        {children}
      </StyledHeaderContainer>
    );
  },
);

Container.displayName = "HeaderContainer";
