// Question 1
// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let num2 = i + 1;
        let num1 = nums.length - 1;

        while (num2 < num1) {
            const sum = nums[i] + nums[num2] + nums[num1];
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            if (sum === target) {
                return sum;
            } else if (sum < target) {
                num2++;
            } else {
                num1--;
            }
        }
    }

    return closestSum;
}