export const getSum = (data) => {
  const sum = data.reduce((a, b) => a + parseFloat(b.price.slice(1)), 0);
  let priceString = sum.toLocaleString();
  if (priceString[priceString.length - 2] === '.') {
    priceString += '0';
  }
  return `$${priceString}`;
};

