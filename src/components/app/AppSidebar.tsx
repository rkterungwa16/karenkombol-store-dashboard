import { useScreenBreakpoint } from "../../utils/hooks/useScreenBreakpoint";
import { Sidebar, SidebarNav } from "../sidebar";
import { navItems } from "./nav-items";

export const AppSidebar = () => {
  const isMobile = useScreenBreakpoint('xs');
  console.log("isMobile", isMobile);
  return (
    <Sidebar>
      {({ currentOpenItem, handleSetCurrentOpenItem }) => {
        {
          return (
            <SidebarNav px="px-3">
              {navItems.map((_item) => {
                if (_item.type === "item") {
                  const { component, to, icon: Icon, name } = _item;
                  const Component = component;
                  return (
                    <Component
                      // active={false}
                      // className=""
                      // disabled={false}
                      // customLink={{
                      //   component: Link,
                      //   props: {
                      //     to,
                      //   },
                      // }}
                      href={to}
                      key={name}
                      {...(Icon && { icon: <Icon /> })}
                    >
                      {name && name}
                    </Component>
                  );
                }

                if (_item.type === "group") {
                  const { component, items, name, icon: Icon, to } = _item;
                  const Component = component;
                  return (
                    <Component
                      // active={false}
                      // className=""
                      // disabled={false}
                      toggler={<>{name && name}</>}
                      {...(Icon && { icon: <Icon /> })}
                      key={name}
                      handleSetCurrentOpenItem={handleSetCurrentOpenItem}
                      visible={
                        currentOpenItem === name.toLowerCase() ? true : false
                      }
                      idx={name.toLowerCase()}
                      href={to}
                    >
                      {items
                        ? items?.map((_item, index) => {
                            const { component, to, name } = _item;
                            const Component = component;
                            return (
                              <Component
                                // active={false}
                                // className=""
                                // disabled={false}
                                // customLink={{
                                //   component: Link,
                                //   props: {
                                //     to,
                                //   },
                                // }}
                                href={to}
                                key={index}
                                pl="pl-4"
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
          );
        }
      }}
    </Sidebar>
  );
};
