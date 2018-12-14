// creates an action
// takes in data and returns an object

export default function changeAnimal(animal) {
  return { type: "SET_ANIMAL", payload: animal };
}
