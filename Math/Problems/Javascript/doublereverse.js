/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
    let org=num
  function reverse(nums) {
    let temp,
      rev = 0;
    while (nums > 0) {
      temp = nums % 10;
      rev = rev * 10 + temp;
      nums = parseInt(nums / 10);
    }
    return rev;
  }

  return reverse(reverse(num))===org?true:false;
};
console.log(isSameAfterReversals(6500));


function reverse(nums) {
    let temp,
      rev = 0;
    while (nums > 0) {
        console.log(nums)
      temp = nums % 10;
      rev = rev * 10 + temp;
      nums = parseInt(nums / 10);
    }
    return rev;
  }

//   console.log(reverse(100))