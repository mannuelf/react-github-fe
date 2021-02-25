import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  return (
    <Navbar bg="light">
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
    </Navbar>
  );
}
