const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// task 1

// console.log(randomNumber);

// if (randomNumber > 0.7) {
//   alert(randomNumber);
// }

// task 2
numArray = [1, 2, 3, 4, 5];

// 1.
// for (let i = 0; i < numArray.length; i++) {
//   console.log(numArray[i]);
// }
// 2.
// for (const num of numArray) {
//   console.log(num);
// }

// task 3
// for (let i = numArray.length; i > -1; i--) {
//   console.log(numArray[i]);
// }

// task 4
const randomNumber2 = Math.random();

if (randomNumber > 0.7 && randomNumber2 > 0.7) {
  alert('greater 0.7');
  console.log(randomNumber, randomNumber2);
} else if (randomNumber < 0.2 || randomNumber2) {
  alert('less than 0.2');
}
