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
          <Route exact path="/metiers">
            <PageBody />
          </Route>
          <Route exact path="/charte">
            <PageBody />
          </Route>
          <Route exact path="/equipe">
            <PageBody />
          </Route>
          <Route exact path="/partenaires">
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
