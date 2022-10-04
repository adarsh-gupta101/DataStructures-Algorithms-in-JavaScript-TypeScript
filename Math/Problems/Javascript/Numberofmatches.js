/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(num) {
    if(num==1) return 0
    
    if(num%2==0){
       return num/2+ numberOfMatches(num/2)
    }
    else{
        return 1+numberOfMatches(num-1)
    }


};

console.log(numberOfMatches(7))