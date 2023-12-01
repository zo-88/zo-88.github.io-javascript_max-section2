// 208. weak sets
let person = { name: 'john' };
const persons = new WeakSet();
persons.add(person);

// not needed anymore -- for garbage collection
// person = null;

console.log(persons);

// 209 weak maps

const personData = new WeakMap();
personData.set(person, 'extra information');

person = null;

console.log(personData);
