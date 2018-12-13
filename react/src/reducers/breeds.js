// reducer is a function
// takes in old state, action object, returns NEW STATE
// pure function.  no side effects

export default function breedsReducer(state = [], action) {
  if (action.type === "SET_BREEDS") {
    return action.payload;
  } else {
    return state;
  }
}
