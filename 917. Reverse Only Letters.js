/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;

  const isLetter = (ch) => /[a-zA-Z]/.test(ch);

  while (left < right) {
    if (!isLetter(arr[left])) {
      left++;
    } else if (!isLetter(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
};
