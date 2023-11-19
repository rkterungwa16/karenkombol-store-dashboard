// import { CNavGroup, NavItem, CNavTitle } from './'

import { RectangularGroupIcon, TagIcon } from "../../../icons";
import { NavGroup } from "../../../nav/NavGroup";
import { NavItem } from "../../../nav/NavItem";

export const navItems = [
  {
    component: NavItem,
    type: "item",
    name: "Dashboard",
    to: "/dashboard",
    icon: RectangularGroupIcon,
  },
  {
    component: NavGroup,
    name: "Products",
    type: "group",
    to: "/dashboard/products",
    icon: TagIcon,
    items: [
      {
        component: NavItem,
        name: "Categories",
        to: "/dashboard/products/categories",
      },
      {
        component: NavItem,
        name: "Collections",
        to: "/dashboard/products/collections",
      },
      {
        component: NavItem,
        name: "Shirts",
        to: "/dashboard/products/shirts",
      },
      {
        component: NavItem,
        name: "Dresses",
        to: "/dashboard/products/dresses",
      },
    ],
  },
];
