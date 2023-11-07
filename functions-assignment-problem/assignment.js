function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

// 1.

const greeting = (name1) => {
  console.log('hi ' + name1);
};
greeting('zoey');

// 2.

const DEFAULT_NAME = 'Ben';
const greeting1 = (name2 = DEFAULT_NAME, phrase) => {
  phrase = 'hey there ';
  console.log(phrase + name2);
};

greeting1();

const greeting3 = () => console.log('Hi there , you.');

greeting3();

const greeting4 = (name3) => {
  return `Hello ${name3}`;
};

console.log(greeting4('ben'));

// 4.

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All strings not empty!');
  },
  'hi',
  '12',
  'njnjn',
  'jnjnjn'
);
