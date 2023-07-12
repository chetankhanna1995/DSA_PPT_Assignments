// **Question 7**

// Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

// **Examples:**

// > Input: str = “cd”
// > 
// > 
// > **Output:** cd dc
// > 
// > **Input:** str = “abb”
// > 
// > **Output:** abb abb bab bba bab bba
// > 

function permute(str) {
    if (str.length === 1) return [str];
    const permutations = [];

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];

        const subPermutations = permute(str.slice(0, i) + str.slice(i + 1));
    }
}