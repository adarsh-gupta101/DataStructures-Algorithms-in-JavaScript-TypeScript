/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(!nums || nums.length < 1){
        return 0;
    }
    
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == val){
            continue;
        }
        nums[count] = nums[i];
        count++;
    }
    return count;
};
