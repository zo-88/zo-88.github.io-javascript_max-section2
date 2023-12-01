// 205. working with sets
const ids = new Set(['hi', 'I', 'am', 'a', 'set']);
console.log(ids);
console.log(ids.has(1));

// add
ids.add(2);
ids.add(4);
console.log(ids);

// entries
console.log(ids.entries());
// ids.forEach((entry) => {
//   console.log(entry);
// });

// delete
ids.delete(2);
ids.delete(4);

for (const entry of ids.entries()) {
  console.log(entry[0]);
}
