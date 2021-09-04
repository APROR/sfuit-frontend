import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard/Dashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
