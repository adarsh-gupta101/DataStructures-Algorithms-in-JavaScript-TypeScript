// var threeSum = function (nums) {
//   var result = [];
//   var newd = [];
//   nums.sort()

//   for (var i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     for (var j = i + 1; j < nums.length; j++) {
//       if (j > i + 1 && nums[j] === nums[j - 1]) continue;
//       for (var k = j + 1; k < nums.length; k++) {
//         if (k > j + 1 && nums[k] === nums[k - 1]) continue;
//         if (nums[i] + nums[j] + nums[k] === 0 && i != j && j != k && i != k) {
//           // if (k != j + 1 && nums[k] == nums[k - 1]) continue;
//           let triplet = [nums[i], nums[j], nums[k]].sort();

//           if (!result.includes(triplet)) {
//             result.push(triplet);
//           }
//         }
//       }
//     }
//   }

//   return result;
// };

var threeSum = function (nums) {
  var result = [];
  var newd = [];
  nums.sort((a,b)=>a-b);

  for (var i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    const target= -nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
         if (nums[left] + nums[right] < target) {
            left++;
        }  if (nums[left] + nums[right] > target) {
            right--;
        }
        else if (nums[left] + nums[right] === target) {
            result.push([nums[i], nums[left], nums[right]]);
            while ( nums[left] === nums[left + 1]) left++;
            while ( nums[right] === nums[right - 1]) right--;
            left++;
            right--;
        } 
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
