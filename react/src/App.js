import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

// class component
class App extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });

    promise.then(console.log, console.error);
  }

  render() {
    // return React.createElement("div", {}, [
    //   React.createElement(
    //     "h1",
    //     { onClick: this.handleTitleClick },
    //     "Adopt Me!"
    //   ),
    //   React.createElement(Pet, {
    //     name: "Luna",
    //     animal: "dog",
    //     breed: "Havanese"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Moji",
    //     animal: "bird",
    //     breed: "Cockatiel"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Felix",
    //     animal: "cat",
    //     breed: "mix"
    //   })
    // ]);

    // using jsx

    return (
      <div>
        <h1>Adopt Me Please! </h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Doink" animal="Bird" breed="Parrot" />
        <Pet name="Bonkers" animal="Cat" breed="Mix" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
