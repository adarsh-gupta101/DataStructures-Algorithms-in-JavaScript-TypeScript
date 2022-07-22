// function howSum(targetSum, numbers, memo = {}) {
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;
//     for (let num of numbers) {
//       const reminder = targetSum - num;
//       const reminderresult = howSum(reminder, numbers, memo);

//       if (reminderresult !== null) {
//         memo[targetSum] = [...reminderresult, num];
//         return memo[targetSum];
//       }
//     }
//     memo[targetSum] = null;
//     return null;
//   }

//   // console.log(howSum(7, [1, 3]));
//   console.log(howSum(20, [3, 5, 7, 9]));

function twosum(nums, target) {
  const memo = {};
  for (let i = 0; i < nums.length; i++) {

    const needed = target - nums[i];
    console.log(needed)
    let index2 = memo[needed];
console.log("index2",index2,memo[needed],memo)
    if (index2 != null) {
      return [index2, i];
    } else {
      memo[nums[i]] = i;
    }
  }
}

console.log(twosum([ 11, 15,2, 7], 9));
