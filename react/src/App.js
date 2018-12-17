import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Loadable from "react-loadable";
import NavBar from "./NavBar";
import { Provider } from "./SearchContext";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

// we use the  state on App for the provider - Context reads from the app state the portal using consumer
class App extends React.Component {
  // just javascript- easier to read on a new line
  // return React.createElement("div", {}, []); this is same as below but using jsx.babel transforms
  render() {
    return (
      <div>
        <Provider store={store}>
          {/* PROVIDER - anything inside provider-all the state you can access, using the Consumer anywhere */}

          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
