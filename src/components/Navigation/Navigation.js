import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.appNavigation}>
      <NavLink to="/">Home</NavLink>
      <NavLink
        to="/about"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        About
      </NavLink>
    </nav>
  );
}
