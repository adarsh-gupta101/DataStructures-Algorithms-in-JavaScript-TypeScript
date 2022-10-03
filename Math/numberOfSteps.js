/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {

    if(num==0) return 0
    
    if(num%2==0){
       return 1+ numberOfSteps(num/2)
    }
    else{
        return 1+numberOfSteps(num-1)
    }


};

console.log(numberOfSteps(14))