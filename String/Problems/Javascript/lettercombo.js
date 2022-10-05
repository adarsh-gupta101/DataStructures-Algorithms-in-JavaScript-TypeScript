/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const data = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const arr = [];
  let specified = digits.split("");
  let isfour = specified.filter((d) => {
    return d == "7" || d == "9" ? true : false;
  });
//   console.log(isfour, "isssssss");
//   console.log(specified);
  if (digits.length == 0) return [];
  // console.log(Number(digits),data[2])
  if (digits.length == 1) return data[Number(digits)];
  else {
    for (let i = 0; i < isfour.length !== 0 ? 12 : 9; i++) {
      for (let j = 0; j < isfour.length !== 0 ? 12 : 9; j++) {
        arr.push(data[Number(digits[i]) + data[Number(digits[j])]]);
      }
    }
  }
  return arr;
};

console.log(letterCombinations("27"));
