{/* <aside>
💡 **Question 8**

Given an array, find a product of all array elements.

**Example 1:**

Input  : arr[] = {1, 2, 3, 4, 5}
Output : 120
**Example 2:**

Input  : arr[] = {1, 6, 3}
Output : 18

</aside> */}

function product(arr) {
    let ans = 1;
    for (let i = 0; i < arr.length; i++) {
        ans = ans * arr[i]
    }
    return ans
}