/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
   if (pattern.length !== words.length) return false;

   const charToWord = {};
   const wordToChar = {};

   for (let i = 0; i < pattern.length; i++) {
       const ch = pattern[i];
       const word = words[i];

       if (charToWord[ch] && charToWord[ch] !== word) {
           return false;
       }

       if (wordToChar[word] && wordToChar[word] !== ch) {
           return false;
       }

       charToWord[ch] = word;
       wordToChar[word] = ch;
   }

   return true;
};