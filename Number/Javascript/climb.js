/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   let count = 0;

//   return (
//     (factorial(n) / factorial(n - 1)) * (factorial(n) / (2 * factorial(n - 2)))
//   );
// };

// function factorial(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
var climbStairs=function(n,memo={}){
    if(n in memo){return memo[n]}
    if(n==1)return 1
    if(n==2) return 2
    memo[n]=climbStairs(n-1,memo)+climbStairs(n-2,memo)
    return memo[n]
}

console.log(climbStairs(366));
