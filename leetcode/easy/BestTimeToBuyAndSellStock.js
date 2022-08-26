var maxProfit = function(prices) {
  let profit = 0;
  // prices[0]이 주식산 가격이므로 초기화 시켜놓음
  let stockToBuy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // i가 증가하면서 주식 파는것 계속 최신화
    if(stockToBuy > prices[i]) {
      stockToBuy = prices[i];
    }

    // 현재 이익
    const currProfit = prices[i] - stockToBuy;

    if (currProfit > profit) {
      profit = currProfit;
    }
  }

  return profit;
};


let prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));