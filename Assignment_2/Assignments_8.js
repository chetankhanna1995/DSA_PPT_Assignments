// Question 8
// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

function minimumScore(nums, k) {
    let minVal = Infinity;
    let maxVal = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        minVal = Math.min(minVal, nums[i]);
        maxVal = Math.max(maxVal, nums[i]);
    }

    const initialScore = maxVal - minVal;

    if (k >= initialScore) {
        return 0;
    } else {
        const potentialMinScores = [
            maxVal - k - (minVal + k),
            maxVal - (minVal - k)
        ];
        return Math.min(...potentialMinScores);
    }
}

const nums = [1];
const k = 0;
const minScore = minimumScore(nums, k);

console.log(minScore);
