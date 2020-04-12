import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageBody from "./layout/PageBody/PageBody";
import FrontPageBody from "./layout/PageBody/FrontPageBody";

function App() {
  return (
    <div>
      <Router>
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
