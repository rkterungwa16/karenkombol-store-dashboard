import { useLocation } from "react-router-dom";
import { useScreenBreakpoint } from "../../utils/hooks/useScreenBreakpoint";
import { Sidebar } from "../sidebar";
import { navItems } from "./nav-items";

export const AppSidebar = () => {
  const location = useLocation();
  const isMobile = useScreenBreakpoint("xs");
  console.log("isMobile", isMobile);
  return <Sidebar navItems={navItems} currentPage={location.pathname} />;
};
