import styled from "styled-components";
import { FC, ReactNode } from "react";
import { Header } from "../../header/Header";

export const StyledContentLayout = styled.div`
  min-height: 56px;
  background: #f6f9fc;
  width: calc(100% - 240px);
`;

export type ContentLayoutProps = {
  children: ReactNode;
};

export const ContentLayout: FC<ContentLayoutProps> = ({ children }) => (
  <StyledContentLayout>
    <Header />
    <ContentLayout>{children}</ContentLayout>
  </StyledContentLayout>
);
