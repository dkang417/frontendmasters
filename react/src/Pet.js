import React from "react";

const Pet = props => {
  // function components -stateless
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.breed)
  ]);
};

export default Pet;
