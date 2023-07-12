{/* <aside>
💡 **Question 3**

****Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

**Example 1:**

Input :  set = “abc”

Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

**Example 2:**

Input : set = “abcd”

Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

</aside> */}

function powerSet(str,index,curr)
{
    let n = str.length;
    if (index == n)
    {
        return;
    }
 
    document.write(curr+"<br>");
    for (let i = index + 1; i < n; i++)
    {
        curr += str[i];
        powerSet(str, i, curr);
        curr = curr.substring(0, curr.length - 1);
    }
}