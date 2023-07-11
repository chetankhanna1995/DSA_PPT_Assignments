{/* <aside>
💡 **Question 1**
Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

**Example 1:**

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

Output: [1,5]

**Explanation:** Only 1 and 5 appeared in the three arrays.

</aside> */}

function arraysIntersection(arr1, arr2, arr3) {
    const map = {};
    const result = [];

    for (const num of arr1) {
        map[num] = map[num] ? map[num] + 1 : 1;
    }

    for (const num of arr2) {
        if (map[num]) {
            map[num]++;
        }
    }

    for (const num of arr3) {
        if (map[num] === 2) {
            result.push(num);
        }
    }

    return result;
}