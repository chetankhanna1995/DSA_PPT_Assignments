{/* <aside>
💡 **Question 3**

Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

**Example 1:**

**Input:** word1 = "sea", word2 = "eat"

**Output:** 2

**Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

</aside> */}

const minDistance = function (word1, word2) {
    const memo = {};
    const helper = (i = w1.length - 1, j = w2.length - 1) => {
        let key = `${i},${j}`;
        if (memo[key] !== undefined) {
            return memo[key];
        }
        if (i < 0 || j < 0) {
            return 0;
        }
        if (w1[i] === w2[j]) {
            const res = 1 + helper(i - 1, j - 1);
            memo[key] = res;
            return memo[key];
        }
        const res = Math.max(helper(i, j - 1), helper(i - 1, j));
        memo[key] = res;
        return memo[key];
    };
    const longestSubseq = helper();

    const minDeletions = word1.length + word2.length - 2 * longestSubseq;
    return minDeletions;
};