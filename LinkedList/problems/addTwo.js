/**
 * Definition for singly-linked list.
//  * function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let l11 = 0,
    l22 = 0;
  for (let i = l1.length - 1; i >= 0; i--) {
    console.log(l1[i], i);
    l11 = l11 * 10 + l1[i];
  }
  for (let i = l2.length - 1; i >= 0; i--) {
    l22 = l22 * 10 + l2[i];
  }

  let ll3=String(l11+l22).split('').reverse();


for(let i=0;i<l1.length;i++){
   l11=new ListNode(l1[i]);
}
return l11
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
