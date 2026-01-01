/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word === word.toUpperCase()) return true;
    if(word === word.toLowerCase()) return true;

    const first = word[0];
    const rest = word.slice(1);

    if(first === first.toUpperCase() && rest === rest.toLowerCase()) {
        return true;
    }
    return false;
};