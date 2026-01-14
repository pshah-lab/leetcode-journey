/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    
    let n = score.length;
    let result = new Array(n);

    
    let sorted = [...score].sort((a, b) => b - a);

   
    let rankMap = new Map();
    for (let i = 0; i < n; i++) {
      rankMap.set(sorted[i], i + 1);
    }

    
    for (let i = 0; i < n; i++) {
      let rank = rankMap.get(score[i]);

      if (rank === 1) result[i] = "Gold Medal";
      else if (rank === 2) result[i] = "Silver Medal";
      else if (rank === 3) result[i] = "Bronze Medal";
      else result[i] = rank.toString();
    }

    return result;
};