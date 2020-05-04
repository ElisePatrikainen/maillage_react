import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link, useLocation} from "react-router-dom";
import PageBody from "./layout/PageBody/PageBody";
import FrontPageBody from "./layout/PageBody/FrontPageBody";
import Navigation from "./layout/Navigation/Navigation";

function test() {
    window.scrollTo(0, 0);
}
function App() {
  return (
    <div>

      <Router onEnter={() => {test()}}>
          <Navigation/>
        <Switch>
          <Route path="/:topic/:detail" component={PageBody} />
          <Route path="/:topic" component={PageBody} />
          <Route exact path="/" component={FrontPageBody} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
