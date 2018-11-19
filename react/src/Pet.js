import React from "react";

const Pet = props => {
  // function components -stateless
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, props.name),
  //     React.createElement("h1", {}, props.animal),
  //     React.createElement("h1", {}, props.breed)
  //   ]);

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal} </h2>
      <h3> {props.breed} </h3>
    </div>
  );
};

export default Pet;
