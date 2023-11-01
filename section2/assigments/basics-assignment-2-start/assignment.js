const task3Element = document.getElementById('task-3');

// task 1
function message() {
  alert('Hello working');
}

function userGreeting(name) {
  alert(`Hello there, ${name}!`);
}

// task 2
message();
userGreeting('Zoey');

// task 3
task3Element.addEventListener('click', message);

// task 4
function combinedString(str1, str2, str3) {
  return str1 + str2 + str3;
}

alert(combinedString('Hello ', 'you ', 'again!'));
