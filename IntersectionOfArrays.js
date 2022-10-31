/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const set_intersection = (set1, set2) => {
    let output = [];
    const arr = Array.from(set1)
    for (let s of arr)
      if (set2.has(s)) {
          output.push(s);
      }

    return output;
  }
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    if (set1.size < set2.size) {
        return set_intersection(set1, set2);
    }
    else {
        return set_intersection(set2, set1);
    }
};
