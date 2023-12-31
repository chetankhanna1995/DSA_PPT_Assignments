{/* <aside>
💡 **Question 8**

Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

**Example 1:**

**Input:** s = "ab", goal = "ba"

**Output:** true

**Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

</aside> */}

const buddyStrings = function (A, B) {
    if (A.length != B.length) {
        return false;
    }

    if (A == B) {
        let s = new Set();

        for (let i = 0; i < A.length; i++) {
            s.add(A.charAt(i));
        }

        return s.size < A.length;
    }

    let diff = [];
    for (let i = 0; i < A.length; i++) {
        if (A.charAt(i) != B.charAt(i)) {
            diff.push(i);
        }
    }

    return (
        diff.length == 2 &&
        A.charAt(diff[0]) == B.charAt(diff[1]) &&
        A.charAt(diff[1]) == B.charAt(diff[0])
    );
};