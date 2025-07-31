/**
 * @param {number[]} nums
 * @return {number}
 */
var subarrayBitwiseORs = function(nums) {
    let res = new Set();    
    let prev = new Set();    

    for (let num of nums) {
        let cur = new Set();
        cur.add(num);
        for (let val of prev) {
            cur.add(val | num);
        }
        for (let val of cur) {
            res.add(val);
        }
        prev = cur;
    }

    return res.size;
};