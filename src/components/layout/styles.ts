import styled from "styled-components";
import { CSSProperties } from "react";

export const StyledPageWrapper = styled.div`
  ${(props: CSSProperties) => {
    return `
        display: ${props.display};
        justify-content: ${props.justifyContent};
        align-items: ${props.alignItems};
        width: ${props.width};
       height: ${props.height};
      `;
  }}
`;
