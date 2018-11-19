import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// class component
class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
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
