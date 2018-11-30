import React from "react";

// provider and consumer -portal of information no matter how much distance is between the 2
const searchContext = React.createContext({
  // describe whatyour data lookslike
  location: "new york, NY",
  animal: "",
  breed: "",
  breeds: [],
  // methods so the consumer side can edit
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = searchContext.Provider;
export const Consumer = searchContext.Consumer;
