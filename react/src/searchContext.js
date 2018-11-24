import React from "react";

// provider and consumer -portal of information
const searchContext = React.createContext({
  location: "new york, NY",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = searchContext.Provider;
export const Consumer = searchContext.Consumer;
