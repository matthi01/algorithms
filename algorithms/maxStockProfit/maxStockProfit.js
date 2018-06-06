// takes array of prices for a stock throughout the day
// returns the max possible profit of the day

// find best price to buy and best price to sell -> return the profit
// if no profit possible return -1
// profit of 0 is fine
// no nested loops!!

const maxStockProfit = pricesArr => {
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;

    let changeBuyPrice = true;

    for (let i = 0; i < pricesArr.length; i++) {
        if (changeBuyPrice) {
            buyPrice = pricesArr[i];
        }
        sellPrice = pricesArr[i + 1];

        if (sellPrice < buyPrice) {
            changeBuyPrice = true;
        } else {
            let tempProfit = sellPrice - buyPrice;
            if (tempProfit > maxProfit) {
                maxProfit = tempProfit;
            }
            changeBuyPrice = false;
        }
    }

    return maxProfit;
};

maxStockProfit([32, 46, 26, 38, 40, 48, 42]);
