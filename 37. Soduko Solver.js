/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const N = 9;

    function isValid(board, row, col, char){
        for(let i = 0; i < N; i++){
            if(board[row][i] === char) return false;

            if(board[i][col] === char) return false;

            let boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            let boxCol = 3 * Math.floor(col / 3) + (i % 3);
            if(board[boxRow][boxCol] === char) return false;
        }

        return true;
    }

    function backTrack(board){
        for(let row = 0; row < N; row++){
            for(let col = 0; col < N; col++){
                if(board[row][col] === "."){
                    for(let num = 1; num <= 9;num++){
                        let char = num.toString();
                        if(isValid(board, roe, col, char)){
                            board[row][col] = char;
                            if( backTrack(board)) return true;
                            board[row][col] = ".";
                        }
                    }
                     return false;
                }
               
            }
        }

        return true;
    }

    backTrack(board);
};