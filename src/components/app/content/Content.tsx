import styled from "styled-components";
import { FC, ReactNode } from "react";
import { ContentLayout } from "./ContentLayout";
import { Header } from "../../header/Header";

export const StyledContent = styled.div`
  position: relative;
  min-height: calc(100% - 56px);
  padding: 20px 30px 40px 30px;
  background: #f3f4f7;
`;

export type ContentProps = {
  children?: ReactNode;
};

export const Content: FC<ContentProps> = ({ children }) => (
  <ContentLayout>
    <Header />
    <StyledContent>{children}</StyledContent>
  </ContentLayout>
);
