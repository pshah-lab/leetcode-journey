/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let result = nums1.slice(0, m);
    result = result.concat(nums2);

    result.sort((a, b) => a - b);

    for (let i = 0; i < result.length; i++) {
        nums1[i] = result[i];
    }
};