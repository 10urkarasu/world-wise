import styles from "./SideBar.module.css";
import Logo from "../logo/Logo";
import AppNav from "../appnav/AppNav";
import SideBarFooter from "../sidebarfooter/SideBarFooter";
import { Outlet } from "react-router-dom";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;
