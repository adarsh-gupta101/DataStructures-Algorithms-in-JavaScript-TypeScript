// var myPow = function (x, n) {
//   if (x == 1) return 1;
//   if (n == 1) return x;
//   let pow = 1;
//   if (n > 0) {
//     for (let i = 0; i < n; i++) {
//       pow = pow * x;
//     }
//     return pow;
//   } else {
//     for (let i = 0; i < -n; i++) {
//       if (-104 <= pow <= 104) {
//         pow = (pow * 1) / x;
//       } else pow = 0;
//       return pow;
//     }
//   }

//   return pow;
// };

// console.log(myPow(2, -3));

var myPow = function (x, n) {
  if (n === 0) {
    console.log("returnin 1");
    return 1;
  }
  if (n < 0) {
    console.log("returning 1/", "Math.pow(", x, -n, ")");
    return 1 / myPow(x, -n); //2 -2"
  }
  if (n % 2 === 0) {
    console.log("returning Math.pow %2(", x * x, n / 2, ")");

    return myPow(x * x, n / 2);
  }
  console.log("returning Math.pow(", x * x, (n - 1) / 2, ")");
  return x * myPow(x * x, (n - 1) / 2);
};
console.log(myPow(8, 3));



//factorial
function factorial(){
  
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return (fact);
}