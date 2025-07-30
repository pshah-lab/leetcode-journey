/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const maxAND = Math.max(...nums);
    let maxLen = 0;
    let currLen = 0;

    for(let num of nums){
        if(num === maxAND){
            currLen++;
            maxLen = Math.max(maxLen, currLen);
        } else {
            currLen = 0;
        }
    }

    return maxLen;
};