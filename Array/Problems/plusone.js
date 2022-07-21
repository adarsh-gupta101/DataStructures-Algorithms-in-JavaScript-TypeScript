var plusOne = function (digits) {
  let len = digits.length;
//   console.log(len)
//   digits[len - 1] = digits[len - 1] + 1;
//   if (digits[len - 1] == 10) {
//     digits[len - 1] = 1;
//     digits[len] = 0;
//   }
digits[len - 1] = digits[len - 1] + 1;

while(digits[len-1]>9 && len>1){
    // console.log(digits)
    digits[len-1]=0
    digits[len - 2] = digits[len - 2] + 1;
    len--
    // console.log(len)
}
if(digits[len-1]>9 && len==1){
    digits[len-1]=0
    // digits[len+1]=1
    return [1,...digits]
}
return digits

//   for (let i in digits) return digits;
  // let sum=0
  // for (let i in digits){
  // sum=sum*10+i
  // }
  //   return sum
};
// console.log(plusOne([9,8,9]));
