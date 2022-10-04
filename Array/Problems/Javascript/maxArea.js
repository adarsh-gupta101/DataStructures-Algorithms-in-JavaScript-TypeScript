[1, 8, 6, 2, 5, 4, 8, 3, 7];

/**
 * @param {number[]} height
 * @return {number}
 */

console.time("MAX");
// var maxArea = function (height) {
//   let length = 0;
//   for (let x= 0; x< height.length; x++) {
//     for (let y = 0; y < height.length; y++) {
//       if (height[x] <= height[y]) {
//         // console.log(height[x], height[y]);

//         let sum = height[x] * (y-x);
//         if (sum > length) {
//           length = sum;
//           console.log(height[x], height[y],sum);

//         }
//       } else {
//         let sum2 = height[y] * (y-x);
//         if (sum2 > length) {
//           length = sum2;
//           console.log(height[x], height[y],sum2);

//         }
//       }
//     }
//   }

//   return length;
// };
var maxArea = (height) => {
  let ans = 0;
  i = 0;
  j = height.length - 1;
  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
    height[i] <= height[j] ? i++ : j--;
  }
  return ans;
};
console.timeEnd("MAX");

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]));
// Binary search tree inorder traversal
// https://leetcode.com/problems/binary-search-tree-inorder-traversal/
// https://leetcode.com/problems/binary-search-tree-inorder-traversal/discuss/24093/My-solution-in-JavaScript-using-stack-O(n)-time-O(1)-space
// https://leetcode.com/problems/binary-search-tree-inorder-traversal/discuss/24093/My-solution-in-JavaScript-using-stack-O(n)-time-O(1)-space
