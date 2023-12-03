//215. objects

const person = {
  name: 'John',
  age: 30,
  hobbies: ['Football', 'Cooking'],
  greet: function () {
    alert(`Hi there ${this.name}`);
  },
};

// 216. properties

// add--
person.isMarried = false;

// delete

// delete person.age;
// or
// removes value not property of age
// can also set to undefined but not the 'best/clean' practice
person.age = null;

console.log(person);

// 217. special key names and square bracket property access

// can use a string as a key
const person1 = {
  'first name': 'Jim',
  age: 30,
  hobbies: ['Football', 'Cooking'],
  greet: function () {
    alert(`Hi there ${this.name}`);
  },
};

// square bracket access
console.log(person1['first name']);

// 218. property types and order

// dynamic settings
const userChosenKeyName = 'level';

const person2 = {
  'first name': 'James',
  age: 30,
  hobbies: ['Football', 'Cooking'],
  greet: function () {
    alert(`Hi there ${this.name}`);
  },
  1.5: 'hi',
  [userChosenKeyName]: '...',
};

console.log(person2[1.5]);

// order
console.log(person2);
const keyName = 'first name';
console.log(person2[keyName]);
