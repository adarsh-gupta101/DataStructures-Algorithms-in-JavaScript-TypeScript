// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
//  var addBinary = function(a, b) {
//     // Keep a variable carry.
//     // Scan the strings from right to left.
//     // Calculate sum by adding the two bits represented by the characters and add carry to it.
//     // Take the sum modulo 2 (sum % 2) (because it's binary, duh 😃) and add it in the front of the existing result string.
//     // Update the carry by taking sum / 2 for the next iteration.
//     // Check if the value of the carry is more than zero after the last iteration and if exists, add it to the front of the result.

// let result=""
//     let carry = 0;
//     let i=a.length-1;
//     let j=b.length-1;

//     while (i >= 0 || j >= 0) {
//         // Sum of two bits
//         let sum = carry;
//         if (i >= 0) {
//             // console.log(sum, a[i]);
//             sum =sum + a[i] - '0';
//             i--
//         }
//         if (j >= 0) {
//             sum += b[j--] - '0';
//         }
//         // Add the bit to the result
//         result = sum % 2 + result;
//         // Modify carry
//         carry = parseInt(sum / 2);
//     }
//     // Final check if carry exists
//     if (carry > 0) {
//         result = 1 + result;
//     }

//      return result
// };

// console.log(addBinary("1010", "1100"));

function addBinary(a, b) {
  let result = "";

  function toNumber(a) {
    let sum = 0;
    for (i = 0; i < a.length - 1; i++) {
      sum += Number(a[i]) * 2 ** i;
      //   sum += Number(a[i]) * 2 ** i;
    //   console.log(sum);
    }
    return sum;
  }
  let sum = toNumber(a) + toNumber(b);
  toBinary(sum);
  // return sum;
  function toBinary(a) {
    while (a > 0) {
      result = (a % 2) + result;
      a = Math.floor(a / 2);
    }
  }
  return result;
}

console.log(addBinary("10", "1"));
