// Question 2
// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:
//            ● 0 <= a, b, c, d < n
//            ● a, b, c, and d are distinct.
//            ● nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

const removeElement = (nums, val) => {
    let count = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== val) {
            count += 1;
        } else {
            nums[index] = 0;
        }
    }

    nums.sort().reverse();

    return count;
};