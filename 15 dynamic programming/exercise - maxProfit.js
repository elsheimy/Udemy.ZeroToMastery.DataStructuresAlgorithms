// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

function maxProfit(prices) {
  // Time complexity = O(n)
  // Space complexity = O(1)
  let maxProfit = 0;

  let minValue = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    let current = prices[i];
    if (current < minValue) {
      minValue = current;
      minIndex = i;
    }
    else if (current > minValue && i > minIndex) {
      maxProfit = Math.max(current - minValue, maxProfit);
    }

  }
  return maxProfit;
}

console.log(maxProfit([3,3,5,0,0,3,1,4]));