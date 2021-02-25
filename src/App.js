import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
import MainNavigation from "./components/MainNavigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";

export default function App({ username, surname }) {
  return (
    <>
      <MainNavigation username={username} />
      <Switch>
        <Route path="/" exact component={() => <Home username={username} />} />
        <Route path="/about">
          <About username={username} surname={surname} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
