var maxProfit = function (prices) {
  let hasStock = false;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (!hasStock && prices[i] < prices[i + 1]) {
      hasStock = true;
      profit -= prices[i];
    } else if (
      hasStock &&
      (prices[i] > prices[i + 1] || prices[i + 1] === undefined)
    ) {
      hasStock = false;
      profit += prices[i];
    }
  }
  return profit;
};
