import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import pf from "petfinder-client";
import Loadable from "react-loadable";
import NavBar from "./NavBar";
import { Provider } from "./SearchContext";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

// loadable
const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1>loading split out code.. </h1>;
  }
});
// loadable
const LoadableResults = Loadable({
  loader: () => import("./Results"),
  loading() {
    return <h1>loading split out code.. </h1>;
  }
});

const LoadableSearchParams = Loadable({
  loader: () => import("./SearchParams"),
  loading() {
    return <h1>loading split out code.. </h1>;
  }
});

// we use the  state on App for the provider - Context reads from the app state the portal using consumer
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "new york, NY",
      animal: "",
      breed: "",
      breeds: [],
      // adding functions also inside state to provide into the Context
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    };
  }
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value
      },
      // this gets called after setstate
      this.getBreeds
    );
  };
  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };
  // when someone selects new animal
  getBreeds() {
    if (this.state.animal) {
      petfinder.breed
        .list({ animal: this.state.animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
          }
        })
        .catch(console.error);
    } else {
      this.setState({
        breeds: []
      });
    }
  }
  // just javascript- easier to read on a new line
  // return React.createElement("div", {}, []); this is same as below but using jsx.babel transforms
  render() {
    return (
      <div>
        <NavBar />
        <ReduxProvider store={store}>
          {/* PROVIDER - anything inside provider-all the state you can access, using the Consumer anywhere */}
          <Provider value={this.state}>
            <Router>
              <LoadableResults path="/" />
              <LoadableDetails path="/details/:id" />
              <LoadableSearchParams path="/search-params" />
            </Router>
          </Provider>
        </ReduxProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
