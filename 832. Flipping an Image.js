/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let r = 0; r < image.length; r++) {
      let row = image[r];
      let i = 0, j = row.length - 1;
  
      while (i <= j) {
        if (i === j) {
         
          row[i] = row[i] ^ 1; 
        } else {
          let a = row[i] ^ 1;
          let b = row[j] ^ 1;
          row[i] = b;
          row[j] = a;
        }
        i++;
        j--;
      }
    }
  
    return image;
  };