import React, { Component } from "react";
import { HashRouter as Routes, Route, Switch } from "react-router-dom";
import Navbar from "./client/components/Navbar";
import Main from "./client/components/Main";
import SingleCity from "./client/components/SingleCity";

export default class Routers extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Switch>
            <Route exact path="/:id" component={SingleCity} />
            <Route exact path="/" component={Main} />
          </Switch>
        </Routes>
      </React.Fragment>
    );
  }
}
