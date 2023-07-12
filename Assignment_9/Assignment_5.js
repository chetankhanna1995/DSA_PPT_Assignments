{/* <aside>
💡 **Question 5**

Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

**Example 1:**

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: 8

**Example 2:**

Input: arr = {1, 4, 45, 6, 10, -8};
Output: 45

</aside> */}
function findMinRec(A, n) {
    if (n == 1)
        return A[0];

    return Math.min(A[n - 1],
        findMinRec(A, n - 1));
}