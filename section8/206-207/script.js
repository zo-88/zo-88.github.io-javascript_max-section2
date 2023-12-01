// 206. working with maps

const person1 = { name: 'Max' };
const person2 = { name: 'John' };

// add additional information not to object
const personData = new Map([[person1, [{ age: 30, gender: 'male' }]]]);

// add
personData.set(person2, [{ age: 25, gender: 'male' }]);

console.log(personData);
console.log(personData.get(person1));
console.log(personData.get(person2));

// entries

for (const [key, value] of personData.entries()) {
  // console.log(key, value);
  console.log(`${key.name} is a ${value[0].age} year old ${value[0].gender}.`);
}

// keys
for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value[0].age);
  console.log(value);
}
