/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
    const freq = new Map();

   
    for (let val of basket1) {
        freq.set(val, (freq.get(val) || 0) + 1);
    }
    for (let val of basket2) {
        freq.set(val, (freq.get(val) || 0) - 1);
    }

   
    const toSwap = [];
    for (let [val, count] of freq.entries()) {
        if (count % 2 !== 0) return -1;
        for (let i = 0; i < Math.abs(count) / 2; i++) {
            toSwap.push(val);
        }
    }

    toSwap.sort((a, b) => a - b);
    const allFruits = basket1.concat(basket2);
    const minFruit = Math.min(...allFruits);
    let cost = 0;

    
    for (let i = 0; i < toSwap.length / 2; i++) {
        const direct = toSwap[i];
        const indirect = 2 * minFruit;
        cost += Math.min(direct, indirect);
    }

    return cost;
};