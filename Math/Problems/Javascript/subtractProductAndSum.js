/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let arr = String(n);
  let mult = 1;
  add = 0;
  for (i = 0; i < arr.length; i++) {
    mult *= Number(arr[i]);
    add += Number(arr[i]);
  }
  return mult - add;
};

console.log(subtractProductAndSum(234));
