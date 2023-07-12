{/* <aside>
💡 **Question 2**

Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

**Example 1:**

**Input:** s = "()"

**Output:**

true

</aside> */}

const checkValidString = function (s) {
    let leftstack = [];
    let starStack = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                leftstack.push(i);
                break;
            case ")":
                if (leftstack.length > 0) {
                    leftstack.pop();
                } else if (starStack.length > 0) {
                    starStack.pop();
                } else {
                    return false;
                }
                break;
            case "*":
                starStack.push(i);
                break;
        }
    }
    while (leftstack.length > 0 && starStack.length > 0) {
        if (leftstack[leftstack.length - 1] > starStack[starStack.length - 1]) {
            return false;
        }
        leftstack.pop();
        starStack.pop();
    }
    if (leftstack.length > 0) {
        return false;
    }
    return true;
};