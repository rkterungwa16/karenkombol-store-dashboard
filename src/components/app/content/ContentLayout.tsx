import styled from "styled-components";
import { FC, ReactNode } from "react";

export const StyledContentLayout = styled.div`
  height: 100%;
  background: #DDE0DA;
  width: calc(100% - 300px);
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export type ContentLayoutProps = {
  children: ReactNode;
};

export const ContentLayout: FC<ContentLayoutProps> = ({ children }) => (
  <StyledContentLayout>{children}</StyledContentLayout>
);
