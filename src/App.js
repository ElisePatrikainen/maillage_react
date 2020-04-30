import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageBody from "./layout/PageBody/PageBody";
import FrontPageBody from "./layout/PageBody/FrontPageBody";

function test() {
    window.scrollTo(0, 0)
}
function App() {
  return (
    <div>
      <Router onEnter={() => {test()}}>
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
