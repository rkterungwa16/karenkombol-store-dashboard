// import { CNavGroup, NavItem, CNavTitle } from './'

import { ClientRoutes, ProductClientRoutes } from "../../routes/client";
import { RectangularGroupIcon, TagIcon, UserGroupIcon } from "../icons";
import { NavGroup } from "../nav/NavGroup";
import { NavItem } from "../nav/NavItem";
import { NavItemDataProps } from "../sidebar/types";

export const navItems: NavItemDataProps[] = [
  {
    component: NavItem,
    type: "item",
    name: "Dashboard",
    to: ClientRoutes.DASHBOARD,
    icon: RectangularGroupIcon,
  },
  {
    component: NavGroup,
    name: "Products",
    type: "group",
    to: ClientRoutes.PRODUCT,
    icon: TagIcon,
    isOpen: false,
    items: [
      {
        component: NavItem,
        name: "Categories",
        to: ProductClientRoutes.PRODUCT_CATEGORIES.replace(
          "{products}",
          ClientRoutes.PRODUCT,
        ),
      },
      {
        component: NavItem,
        name: "Collections",
        to: ProductClientRoutes.PRODUCT_COLLECTIONS.replace(
          "{products}",
          ClientRoutes.PRODUCT,
        ),
      },
      {
        component: NavItem,
        name: "Shirts",
        to: ProductClientRoutes.PRODUCT_SHIRTS.replace(
          "{products}",
          ClientRoutes.PRODUCT,
        ),
      },
      {
        component: NavItem,
        name: "Dresses",
        to: ProductClientRoutes.PRODUCT_DRESSES.replace(
          "{products}",
          ClientRoutes.PRODUCT,
        ),
      },
    ],
  },
  {
    component: NavItem,
    type: "item",
    name: "Roles",
    to: ClientRoutes.ROLES,
    icon: UserGroupIcon,
  },
];
