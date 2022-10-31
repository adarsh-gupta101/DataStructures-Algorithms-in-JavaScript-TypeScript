var shuffle = function(nums, n) {
    const output = new Array(2*n);
    for (let i = 0; i < n; i++) {
        output[2*i] = nums[i];
        output[2*i+1] = nums[n+i];
    }
    return output;
};
