/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let arr = [];
  let bit = 0;
  for (let i = 0; i < n; i++) {
    arr.push(start + 2 * i);
    bit = bit ^ (start + 2 * i);
  }


  return bit;
};

console.log(xorOperation(4, 3));
