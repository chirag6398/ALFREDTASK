import React from "react";
import { Switch, Route } from "react-router-dom";
import Page1 from "../components/Page1/Page1";
export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Page1 />
      </Route>
      <Route path="/page-2"></Route>
      <Route path="/page-3"></Route>
    </Switch>
  );
}
