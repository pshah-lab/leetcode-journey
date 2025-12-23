/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  const combined = s + s;
  const k = goal.length;

  for (let i = 0; i <= combined.length - k; i++) {
    let match = true;

    for (let j = 0; j < k; j++) {
      if (combined[i + j] !== goal[j]) {
        match = false;
        break;
      }
    }

    if (match) return true;
  }

  return false;
};


// Method 2

var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;
    return (s + s).includes(goal);
};
