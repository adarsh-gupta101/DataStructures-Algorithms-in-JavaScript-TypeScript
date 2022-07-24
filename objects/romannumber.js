/**
 * @param {string} s
 * @return {number}
 */
/*
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
var romanToInt = function (s) {
  const data = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  //roman number for 1000000



  let sum = 0;
  for (let i in s) {
    // console.log(data[s[i]],",",data[s[Number(i)+1]],i,typeof i)
    if (data[s[i]] < data[s[Number(i)+1]]) {
      sum = sum - data[s[i]];
    }
    else{
        sum=sum+data[s[i]]
    }
  }

  return sum;
};

console.log(romanToInt("IV"));
