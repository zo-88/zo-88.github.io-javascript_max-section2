// 196. sort()
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
console.log(prices);

const taxAdjustedPrices = prices.map((price, index, prices) => {
  const priceObj = {
    index: index,
    originalPrice: price,
    taxAdjustedPrice: price * (1 + tax),
  };
  return priceObj;
});

console.log(taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrices);

// reverse
console.log(sortedPrices.reverse());

//197. filter method

const filteredArray = prices.filter((price) => {
  return price > 6;
});

// 198. arrow functions
const filteredArray1 = prices.filter((price) => price > 6);

console.log(filteredArray);
console.log(filteredArray1);

// 199. reduce()

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum);
