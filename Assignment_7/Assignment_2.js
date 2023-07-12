{/* <aside>
💡 **Question 2**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true

</aside> */}

// strobogrammatic function
function strobogrammatic_num(n) {
    let result = numdef(n, n)
    return result
}

// definition function
function numdef(n, length) {
    if (n == 0) return [""]
    if (n == 1) return ["1", "0", "8"]

    let middles = numdef(n - 2, length)
    let result = []

    for (var middle of middles) {
        if (n != length)
            result.push("0" + middle + "0")

        result.push("8" + middle + "8")
        result.push("1" + middle + "1")
        result.push("9" + middle + "6")
        result.push("6" + middle + "9")
    }
    return result
}