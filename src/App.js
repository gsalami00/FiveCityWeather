import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routers from "./routes";
import { Provider } from "react-redux";
import store from "./client/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}

export default App;
