function isHappy(n, sum = 0, n2 = 10){
    if(n === 1) return true;
    if(n2 === 0) return false;
    for(let c of n+'') sum += +c * +c;
    return isHappy(sum, 0, n2 - 1);
};
