/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let maxDrink = numBottles;
    let remainder = 0;

    while(numBottles >= numExchange){
        remainder = numBottles % numExchange;
        numBottles = Math.floor(numBottles / numExchange);
        maxDrink += numBottles;
        numBottles += remainder;
    }

    return maxDrink;
};