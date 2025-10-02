/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let result = numBottles;
    let emptyWB = numBottles;

    while (emptyWB >= numExchange) {
        emptyWB = emptyWB - numExchange;
        numExchange += 1;
        result += 1;
        emptyWB += 1;
    }

    return result;
};

