import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import SignUP from "./components/SIgnUp";
import { PublicRoute } from "react-private-public-route";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <PublicRoute exact path="/register" component={SignUP} />
          <Route exact path="/login" restricted={true} component={Login} />
          {/* <Route exact path="/register" component={Register} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
