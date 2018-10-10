import React, { Component } from "react";
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
