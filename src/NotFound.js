import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <h1>
      Sorry the page you are looking for is gone.
      <NavLink to="/">Click here</NavLink> to go home.
    </h1>
  );
}
