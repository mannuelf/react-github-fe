import { Switch, Route } from "react-router-dom";

import "./sass/App.scss";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function App({ username }) {
  return (
    <Switch>
      <Route path="/" exact component={() => <Home username={username} />} />
      <Route path="/about">
        <About username={username} />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}
