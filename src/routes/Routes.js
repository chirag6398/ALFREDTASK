import React from "react";
import { Switch, Route } from "react-router-dom";
import Page1 from "../components/Page1/Page1";
import Page2 from "../components/Page2/Page2";
import Page3 from "../components/Page3/Page3";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Page1 />
      </Route>
      <Route exact path="/page2">
        <Page2 />
      </Route>
      <Route path="/page3">
        <Page3 />
      </Route>
    </Switch>
  );
}
