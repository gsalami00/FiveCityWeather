import React, { Component } from "react";
import { HashRouter as Routes, Route, Switch } from "react-router-dom";
import Navbar from "./client/components/Navbar";
import Main from "./client/components/Main";
import NewYork from "./client/components/NewYork";
import Dallas from "./client/components/Dallas";
import LosAngeles from "./client/components/LosAngeles";
import Boston from "./client/components/Boston";
import Waldorf from "./client/components/Waldorf";

export default class Routers extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Switch>
            <Route exact path="/NewYork" component={NewYork} />
            <Route exact path="/Dallas" component={Dallas} />
            <Route exact path="/LosAngeles" component={LosAngeles} />
            <Route exact path="/Boston" component={Boston} />
            <Route exact path="/Waldorf" component={Waldorf} />
            <Route exact path="/" component={Main} />
          </Switch>
        </Routes>
      </React.Fragment>
    );
  }
}
