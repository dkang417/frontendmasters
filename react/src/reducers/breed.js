// reducer is a function
// takes in old state, action object, returns NEW STATE
// pure function.  no side effects

export default function breedReducer(state = "", action) {
  if (action.type === "SET_BREED") {
    return action.payload;
  } else if (action.type === "SET_ANIMAL") {
    return "";
  } else {
    return state;
  }
}
