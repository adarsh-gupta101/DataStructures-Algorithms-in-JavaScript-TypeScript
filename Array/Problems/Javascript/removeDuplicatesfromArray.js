// // const removeDup=(arr)=>{
// // let len=arr.length
// //     arr=[...new Set(arr)]
// //     let remaining=len-arr.length
// //     // console.log(remaining)

// //     for(let i=0;i<remaining;i++){
// //         arr.push("_")
// //     }
// // return [...new Set(arr)][0]
// // }

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// var removeDuplicates = function (nums) {
//   let len = nums.length;
//     // console.log(len)

//   for (let i = 0; i < len-1; i++) {
//     // console.log(nums[i])
//     // if (nums.includes(nums[i + 1])) {
//     //   nums.splice(i,1);
//     //   // console.log(arr[i])
//     // }

//     if (!( nums[i ] == nums[i+1 ])) {
//       // nums.splice(i, 1);
//         console.log(nums[i])
//       nums[i ] = "_"; // console.log(arr[i])
//     }
//   }

//   return nums;
// };

var removeDuplicates = function (nums) {
  // Handling Edge Case
  if (nums.length === 0) return 0;
  let p1 = 0;
  for (let p2 = 1; p2 < nums.length; p2++) {
    if (nums[p1] !== nums[p2]) {
      console.log(nums);
      p1++;
      nums[p1] = nums[p2];
      //  console.log(nums)
    }
  }
  return p1 + 1;
};
console.log(removeDuplicates([1, 1, 2, 3,3, 4, 4]));
