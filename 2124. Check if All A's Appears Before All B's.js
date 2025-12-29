/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    const firstB = s.indexOf('b');

    if (firstB === -1) return true;

    return !s.slice(firstB).includes('a');
};