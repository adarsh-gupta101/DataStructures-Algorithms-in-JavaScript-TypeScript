/**
 * @param {number} n
 * @return {number}
 */
 var minOperations = function(n) {
    let arr=[]
    for (let index = 0; index < n; index++) {
        arr.push((2*index) +1);
        
    }
    console.log(arr)
};

console.log(minOperations(6))