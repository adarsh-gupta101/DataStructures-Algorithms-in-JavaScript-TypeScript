//Armstrong Number for n digit

const n = prompt("Enter a number:");
const digits = n.length;
let sum = 0;
let temp = n;

while(temp>0){
    let rem = temp % 10;
    sum += rem ** digits;
    temp = parseInt(temp/10);

}

if(sum == n){
    console.log(`${n} is a Armstrong Number`);
}

else{
    console.log(`${n} is not a Armstrong Number`);
}