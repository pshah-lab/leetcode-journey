 /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleaned = s
        .toLowerCase()
        .split("")               
        .filter(ch => /[a-z0-9]/.test(ch))  
        .join("");                

    let reversed = cleaned
        .split("")
        .reverse()
        .join("");

    return cleaned === reversed;
};

