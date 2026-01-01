/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//     return s.split(" ").map(word => word.split("").reverse().join("")).join(" ");
// };

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const queue = s.split(" ");
    const result = [];

    while(queue.length > 0){
        const word = queue.shift();
        const reversed = word.split("").reverse().join("");
        result.push(reversed);
    }
    return result.join(" ");
};