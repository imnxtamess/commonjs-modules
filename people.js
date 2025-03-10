const stringConcat = require("./names")
const stringsToArr = require("./hobbies")

function createObj() {
  const person = {
    fullname: stringConcat("Davide", "Morisco"),
    hobbies: stringsToArr("Gaming", "Calisthenics", "Motorcycles")
  }
  return person
}

console.log(createObj());




