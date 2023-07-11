{/* <aside>
💡 **Question 6**

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

**Example 1:**

**Input:** changed = [1,3,4,2,6,8]

**Output:** [1,3,4]

**Explanation:** One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.

Other original arrays could be [4,3,1] or [3,1,4].

</aside> */}

changed = [1, 3, 4, 2, 6, 8]

const findOriginalArray = function (changed) {
    if (changed.length % 2 === 1) return [];
    let double = true;
    changed.sort((a, b) => a - b)
    let i = 0;
    while (i < changed.length) {
        let pos = changed.indexOf(changed[i] * 2, i + 1);
        if (pos === -1) {
            double = false;
            break;
        } else {
            changed.splice(pos, 1);
            i++;
        }
    }
    return (double ? changed : []);
};