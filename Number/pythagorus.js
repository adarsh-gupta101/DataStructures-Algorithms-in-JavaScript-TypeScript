/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum = function(c) {
    if(c==1){return true}
    for(i=0;i<c;i++){
        for(j=0;J<c;j++)
        {
            if(i*i+j*j==c*c) return true
        }
    }
    return false
};