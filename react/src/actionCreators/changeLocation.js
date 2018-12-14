// creates an action
// takes in data and returns an object

export default function changeLocation(location) {
  return { type: "SET_LOCATION", payload: location };
}
