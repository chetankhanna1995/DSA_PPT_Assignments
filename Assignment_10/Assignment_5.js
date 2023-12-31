// **Question 5**

// We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

// **Examples :**

// Input  : S = "abcab"
// Output : 7
// There are 15 substrings of "abcab"
// a, ab, abc, abca, abcab, b, bc, bca
// bcab, c, ca, cab, a, ab, b
// Out of the above substrings, there
// are 7 substrings : a, abca, b, bcab,
// c, a and b.

// Input  : S = "aba"
// Output : 4
// The substrings are a, b, a and aba

function countSubstringWithEqualEnds(s) {
    var result = 0;
    var n = s.length;

    for (var i = 0; i < n; i++)

        for (var len = 1; len <= n - i; len++)

            if (checkEquality(s.substring(i, i + len)))
                result++;

    return result;
}