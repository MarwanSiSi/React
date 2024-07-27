import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet /> {/* This is where the nested routes will be rendered */}
      {/* Explanation: React Router searches for the specified path within the nested routes and renders the appropriate component*/}
      <Footer />
    </div>
  );
}

export default SideBar;
