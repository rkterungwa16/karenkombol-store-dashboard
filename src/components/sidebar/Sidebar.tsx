import styled from "styled-components";
import { FC, useState } from "react";
import { SidebarHeader } from "./SidebarHeader";
import { NavItemDataProps } from "./types";
import { SidebarNav } from ".";

export const StyledSidebar = styled.div`
  width: 300px;
  background: #ffffff;
  min-height: 100%;
  float: left;
  z-index: 100;
  position: relative;
  @media screen and (max-width: 991px) {
    position: fixed;
    left: -300px;
    transition: all 0.2s ease-in-out;
  }
`;

export type SidebarProps = {
  narrow?: boolean;
  overlaid?: boolean;
  position?: "fixed" | "sticky";
  size?: "sm" | "lg" | "xl";
  currentPage: string;
  navItems: NavItemDataProps[];
  // children: (data: {
  //   currentOpenItem?: string;
  //   handleSetCurrentOpenItem: (value: string) => void;
  // }) => ReactNode;
};

export const Sidebar: FC<SidebarProps> = ({ navItems, currentPage }) => {
  const [items, setOpenItem] = useState(navItems);
  const handleSetCurrentOpenItem = (name: string) => {
    const itemExists = items.find(
      (_item) =>
        _item.name.toLowerCase() === name.toLowerCase() &&
        _item.type === "group",
    );

    if (itemExists) {
      const modifiedItems = items.map((_item) => {
        if (_item.name.toLowerCase() === name.toLowerCase()) {
          return {
            ..._item,
            isOpen: !_item.isOpen,
          };
        }
        return _item;
      });
      setOpenItem(modifiedItems);
    }
  };

  return (
    <StyledSidebar>
      <SidebarHeader />
      <SidebarNav px="px-3">
        {items.map((_item) => {
          if (_item.type === "item") {
            const { component, to, icon: Icon, name } = _item;
            const Component = component;
            return (
              <Component
                active={_item.to === currentPage}
                // className=""
                // disabled={false}
                hover={{
                  background: "#f0eff0",
                  color: "#99848b",
                }}
                href={to}
                key={name}
                {...(Icon && { icon: <Icon /> })}
                display="flex"
                alignItems="center"
              >
                {name && name}
              </Component>
            );
          }

          if (_item.type === "group") {
            const { component, items, name, icon: Icon, isOpen } = _item;
            const Component = component;
            return (
              <Component
                active={currentPage.includes(name.toLowerCase())}
                // className=""
                // disabled={false}
                toggler={
                  <div style={{ padding: "0.8445rem 1rem" }}>
                    {name && name}
                  </div>
                }
                {...(Icon && { icon: <Icon /> })}
                key={name}
                handleSetCurrentOpenItem={handleSetCurrentOpenItem}
                visible={isOpen}
                idx={name.toLowerCase()}
              >
                {items
                  ? items?.map((_item, index) => {
                      const { component, to, name } = _item;
                      const Component = component;
                      return (
                        <Component
                          active={_item.to === currentPage}
                          // className=""
                          // disabled={false}
                          href={to}
                          key={index}
                          // pl="pl-2"
                          customLink={{
                            props: {
                              ml: "ml-4"
                            }
                          }}
                          display="flex"
                          alignItems="center"
                          hover={{
                            background: "#f0eff0",
                            color: "#99848b",
                          }}
                        >
                          {name && name}
                        </Component>
                      );
                    })
                  : null}
              </Component>
            );
          }
        })}
      </SidebarNav>
      {/* {children({
        currentOpenItem,
        handleSetCurrentOpenItem,
      })} */}
    </StyledSidebar>
  );
};
