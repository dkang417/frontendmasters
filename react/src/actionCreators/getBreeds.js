import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

// ajax asyncrhonous actions - use thunk
export default function getBreeds() {
  //  the function that returns a function is the thunk
  // needs dispatch and getState which comes from Redux
  return function getBreedsThunk(dispatch, getState) {
    const { animal } = getState();

    if (animal) {
      petfinder.breed
        .list({ animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            dispatch({
              type: "SET_BREEDS",
              payload: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
            dispatch({ type: "SET_BREEDS", payload: [] });
          }
        })
        .catch(console.error);
    } else {
      dispatch({ type: "SET_BREEDS", payload: [] });
    }
  };
}
