import styled from "styled-components";
import { FC, ReactNode, useState } from "react";
import { SidebarHeader } from "./SidebarHeader";

export const StyledSidebar = styled.div`
  width: 300px;
  background: #716272cc;
  min-height: 100%;
  float: left;
  z-index: 100;
  position: relative;
`;

export type SidebarProps = {
  narrow?: boolean;
  overlaid?: boolean
  position?: 'fixed' | 'sticky'
  size?: 'sm' | 'lg' | 'xl'
  children: (data: {
    currentOpenItem?: string;
    handleSetCurrentOpenItem: (value: string) => void;
  }) => ReactNode;
};

export const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [currentOpenItem, setCurrentOpenItem] = useState("");
  const handleSetCurrentOpenItem = (value: string) => {
    if (value === currentOpenItem) {
      setCurrentOpenItem("");
    } else {
      setCurrentOpenItem(value);
    }
  };
  console.log('currentOpenItem', currentOpenItem);
  return (
    <StyledSidebar>
      <SidebarHeader />
      {children({
        currentOpenItem,
        handleSetCurrentOpenItem,
      })}
    </StyledSidebar>
  );
};
