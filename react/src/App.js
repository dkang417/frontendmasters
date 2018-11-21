import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./results";
import Details from "./details";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          {" "}
          <Link to="/">Adopt me!</Link>
        </header>

        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
