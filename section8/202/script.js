// 202. spread operator
const namesFragments = ['Jane', 'Doe'];

const spreadNameFragments = [...namesFragments];
// copies array

console.log(spreadNameFragments);

const nums = [1, 23, 4, 567, 89];

console.log(Math.min(...nums));
console.log(Math.max(...nums));

// objects & ...spread

const persons = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 7 },
];

const copiedPersons = [...persons];

// fix
// const copiedPersons2 = persons.map((person) => ({
//   name: person.name,
//   age: person.age,
// }));

persons.push({ name: 'anna', age: 23 });
copiedPersons.push({ name: 'Jim', age: 50 });

// IMPORTANT NOTE
persons[0].age = 42;

console.log(persons, copiedPersons);
