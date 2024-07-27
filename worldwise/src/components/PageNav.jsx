import { NavLink } from "react-router-dom";
import Logo from "./Logo";

//* To use CSS modules:

//* 1. create a CSS file with the same name as the component file eg: "PageNav.module.css", which is a normal css file but dedicated only to its component

//* 2. import the styles object from the CSS file

//* 3. use the styles object to access the CSS classes
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink className={styles.ctaLink} to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
