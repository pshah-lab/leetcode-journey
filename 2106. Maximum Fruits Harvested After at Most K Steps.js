/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    let maxFruits = 0;
    let total = 0;
    let left = 0;

    for (let right = 0; right < fruits.length; right++) {
        total += fruits[right][1];

        while (left <= right) {
            const l = fruits[left][0];
            const r = fruits[right][0];

            const goLeftFirst = Math.abs(startPos - l) + (r - l);
            const goRightFirst = Math.abs(startPos - r) + (r - l);

            if (Math.min(goLeftFirst, goRightFirst) > k) {
                total -= fruits[left][1];
                left++;
            } else {
                break;
            }
        }

        maxFruits = Math.max(maxFruits, total);
    }

    return maxFruits;
};