// creates an action
// takes in data and returns an object

export default function changeBreed(breed) {
  return { type: "SET_BREED", payload: breed };
}
