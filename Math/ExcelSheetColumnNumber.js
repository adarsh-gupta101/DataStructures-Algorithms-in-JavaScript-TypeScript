var titleToNumber = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++)
    {
        result *= 26;
        result += s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    return result;
}

//Leetcode 171
