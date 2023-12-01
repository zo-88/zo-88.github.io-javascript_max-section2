// 194. forEach Method
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const pricesWithTax = [];
const pricesTaxObjs = [];
console.log(prices);

prices.forEach((price) => {
  price *= tax + 1;
  price = Number(price.toFixed(2));
  pricesWithTax.push(price);
});

pricesWithTax.forEach((price, index, prices) => {
  console.log(`${index}: $${price}`);
  const priceObj = {
    index: index,
    price: price,
  };
  pricesTaxObjs.push(priceObj);
});

console.log(pricesWithTax);
console.log(pricesTaxObjs);
