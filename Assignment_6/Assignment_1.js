{/* <aside>
💡 **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2]

</aside> */}

s = "IDID"
const diStringMatch = function (s) {
    const output = [];
    let countI = 0;
    let countD = s.length;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            output.push(countI);
            countI++;
        } else {
            output.push(countD);
            countD--;
        }
    }

    output.push(s[s.length - 1] === "I" ? countD : countI);

    return output;
};