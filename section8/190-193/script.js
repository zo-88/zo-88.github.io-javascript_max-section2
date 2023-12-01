// 190. slice and range
const arr1 = [1, 2, 3, 4, 5];
const arrCopy = arr1.slice(0, 3);
console.log(arr1, arrCopy);

// 190. concat
const testResults = [1, 2, 5, 3, 4, 2, 5, 6];
const storedResults = testResults.concat([3.99, 2]);

// 191. indexOf
console.log(testResults.indexOf(2));
console.log(testResults.lastIndexOf(5));
console.log(testResults, storedResults);

// 192. find()
const personData = [{ name: 'John' }, { name: 'Liam' }];

const liam = personData.find((person, index, persons) => {
  return person.name === 'Liam';
});

console.log(personData);
liam.name = 'liam';
console.log(liam);

const liamIndex = personData.findIndex((person, index, persons) => {
  return person.name === 'liam';
});

console.log(liamIndex);

// 193. includes
