// 201 .split
const data = 'hello there now';
const splitData = data.split(' ');
console.log(data);
console.log(splitData);

// join

const namesList = [];

const firstName = prompt('Enter you first name');
const secondName = prompt('Enter your surname ');
namesList.push(firstName, secondName);
console.log(namesList);

const capNames = namesList.map(
  (name, index) => name[0].toUpperCase() + name.slice(1)
);
const fullName = capNames.join(' ');
alert(`Hello there, ${fullName}`);
