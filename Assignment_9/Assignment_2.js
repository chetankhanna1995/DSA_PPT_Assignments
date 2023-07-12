{/* <aside>
💡 **Question 2**

Given a number n, find the sum of the first natural numbers.

**Example 1:**

Input: n = 3 

Output: 6

**Example 2:**

Input  : 5 

Output : 15

</aside> */}

function recurSum(n) {
    if (n <= 1)
        return n;
    return n + recurSum(n - 1);
}