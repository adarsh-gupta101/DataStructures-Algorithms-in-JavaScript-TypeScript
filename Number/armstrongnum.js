//Armstrong Number for n digit
function Armstrong(n){
    const digits = n.toString().length;
    let sum = 0;
    let temp = n;

    while(temp>0){
        let rem = temp % 10;
        temp = parseInt(temp/10);
        sum += Math.pow(rem,digits);

    }

    if(sum == n){
        console.log(`${n} is a Armstrong Number`);
    }

    else{
        console.log(`${n} is not a Armstrong Number`);
    }
}

Armstrong(370);
