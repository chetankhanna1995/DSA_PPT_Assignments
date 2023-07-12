// **Question 4**

// Given a string calculate length of the string using recursion.

// **Examples:**
// Input : str = "abcd"
// Output :4

// Input : str = "GEEKSFORGEEKS"
// Output :13

function recLen(str) {

    if (str == "")
        return 0;
    else
        return recLen(str.substring(1)) + 1;
}