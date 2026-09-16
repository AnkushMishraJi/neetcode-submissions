class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const columns = new Map();
        const subs = new Map();
        for (let row=0; row<9; row++) {
            for (let col = 0; col< 9; col++){
                if(board[row][col] == '.') continue;
                if(!rows.get(row)) rows.set(row, new Set())
                if(!columns.get(col)) columns.set(col, new Set())
                const key = `${Math.floor(row/3)}${Math.floor(col/3)}`
                if(!subs.get(key)) subs.set(key, new Set())
                if (rows.get(row).has(board[row][col])) return false;
                if (columns.get(col).has(board[row][col])) return false;
                if (subs.get(key).has(board[row][col])) return false;

                rows.get(row).add(board[row][col])
                columns.get(col).add(board[row][col])
                subs.get(key).add(board[row][col])
            }
        }

        return true
    }
}
