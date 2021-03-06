// reducer is a function
// takes in old state, action object, returns NEW STATE
// pure function.  no side effects

export default function locationReducer(state = "Seattle, WA", action) {
  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
