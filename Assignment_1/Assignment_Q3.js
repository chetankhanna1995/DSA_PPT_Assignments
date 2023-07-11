// 💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// **Example 1:**
// Input: numbers = [1,3,5,6], target = 5

// Output: 2

let numbers = [1, 3, 5, 6]
let target = 4;


const output = (numbers, target) => {
    for (let number of numbers) {
        if (number === target) {
            return numbers.indexOf(number)
        } else if (number != target) {
            numbers.push(target)
            numbers = numbers.sort((x, y) => x - y)
            return numbers.indexOf(target)
        }
    }
}
console.log(output(numbers, target));