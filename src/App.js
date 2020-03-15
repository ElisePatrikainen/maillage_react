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
          <Route exact path="/:constantKey">
            <PageBody />
          </Route>

          <Route exact path="/">
            <FrontPageBody />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
