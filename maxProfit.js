/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function (prices) {
  let buy = 0;
  let sell = 1;
  let max = 0;
  while (sell < prices.length) {
    if (prices[buy] > prices[sell]) {
      buy = sell;
    } else {
      let profit = prices[sell] - prices[buy];
      max = Math.max(max, profit);
    }
    sell++;
  }
  return max;
};

prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
