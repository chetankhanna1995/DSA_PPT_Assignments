{/* <aside>
💡 **Question 6**

Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

A **shift** on s consists of moving the leftmost character of s to the rightmost position.

- For example, if s = "abcde", then it will be "bcdea" after one shift.

**Example 1:**

**Input:** s = "abcde", goal = "cdeab"

**Output:**

true

</aside> */}

const reverseStr = function (s, k) {
    const arrayString = s.split('');

    if (!Math.floor(s.length / k)) return arrayString.reverse().join('');

    const unit = Math.floor(s.length / (2 * k));

    for (let i = 0; i <= unit; i++) {
        const unitString = arrayString.slice(i * 2 * k, i * 2 * k + k);
        arrayString.splice(i * 2 * k, k, ...unitString.reverse());
    }

    return arrayString.join('');
};