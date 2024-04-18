var uniquePaths = function(m, n) {
    const dp = Array(m).fill().map(() => Array(n).fill(0));

    dp[0][0] = 1;

    for(let row = 0; row < m; row++){
        for(let col = 0; col < n; col++){
            if(row > 0){
                dp[row][col] += dp[row - 1][col];
            }
            if(col > 0) {
                dp[row][col] += dp[row][col - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};

//Example usage:
console.log(uniquePaths(3,7));
console.log(uniquePaths(3,2));