// task 1
const nums = [1, 2, 3, 4, 5, 6, 7];

const newNums = nums.filter((num) => num > 5);

const mapNums = newNums.map((num) => {
  const obj = {
    num: num,
  };
  return obj;
});

const sum = nums.reduce((prevVal, currVal) => prevVal + currVal, 0);

console.log(newNums);
console.log(mapNums);
console.log(sum);

// task 2
function findMax(arr) {
  return [Math.max(...arr), Math.min(...arr)];
}

console.log(findMax(nums));

// task 3

const [max, min] = findMax(nums);
console.log(max, min);

// task 4  IMPORTANT
const userSet = new Set();
