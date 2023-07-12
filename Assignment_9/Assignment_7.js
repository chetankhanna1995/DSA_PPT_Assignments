{/* <aside>
💡 **Question 7**

Given a string S, the task is to write a program to print all permutations of a given string.

**Example 1:**

***Input:***

*S = “ABC”*

***Output:***

*“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

**Example 2:**

***Input:***

*S = “XY”*

***Output:***

*“XY”, “YX”*

</aside> */}

function permute(str, l, r) {
    if (l == r)
        document.write(str + "<br>");
    else {
        for (let i = l; i <= r; i++) {
            str = swap(str, l, i);
            permute(str, l + 1, r);
            str = swap(str, l, i);
        }
    }
}

function swap(a, i, j) {
    let temp;
    let charArray = a.split("");
    temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return (charArray).join("");
}

let str = "ABC";
let n = str.length;
permute(str, 0, n - 1);