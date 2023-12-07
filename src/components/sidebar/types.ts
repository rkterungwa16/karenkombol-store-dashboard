import { ElementType } from "react";

export type NavItemDataProps = {
  component: ElementType;
  type: "item" | "group";
  to: string;
  name: string;
  icon?: ElementType;
  isOpen?: boolean;
  items?: {
    component: ElementType;
    name: string;
    to: string;
  }[];
};
