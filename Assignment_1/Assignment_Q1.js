// Q1.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]



let nums = [2, 7, 11, 15]
let target = 9

const solution = (nums, target) => {
    let first = 0;
    let second = nums.length - 1;
    while (first < second) {
        if (nums[first] + nums[second] === target) {
            return [first, second]
        } else if (nums[first] + nums[second] > target) {
            second--;
        } else {
            first++;
        }
    }
}
console.log(solution(nums, target));