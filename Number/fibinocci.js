/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n == 0) return 0;
  if (n == 1) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// console.log(fib(400));

function tribonacci(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n == 0) return 0;
  if (n == 1 || n==2) return 1;
  memo[n] =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  return memo[n];
}

console.log(tribonacci(25));
