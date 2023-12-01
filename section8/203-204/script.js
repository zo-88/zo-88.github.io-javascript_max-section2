// 203. destructing array
const namesFragments = ['Jane', 'Doe', 30, 'France', 'Student'];
const [firstName, lastName, ...otherinformation] = namesFragments;
console.log(firstName, lastName, otherinformation);
