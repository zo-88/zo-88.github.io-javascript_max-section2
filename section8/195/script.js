// 195. maps
const prices = [1.99, 5.99, 3.99, 7.85];
let tax = 0.19;

const taxPrices = prices.map((price, index) => {
  const priceObj = {
    index: index,
    originalPrice: price,
    taxedPrice: Number((price *= tax + 1).toFixed(2)),
  };
  return priceObj;
});

console.log(taxPrices);

// map() - exercise

function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  const objArrary = numberArray.map((value) => {
    const obj = {
      val: value,
    };
    return obj;
  });
  return objArrary;
}

console.log(transformToObjects(prices));
