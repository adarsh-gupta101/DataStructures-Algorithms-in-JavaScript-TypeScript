const LinkedList =require("../LinkedList");

console.log(LinkedList)

var deleteDuplicates = function (head) {
  let temp = head,
    temp2 = head,
    count = 1;
  
  while (temp?.right !== undefined) {
    console.log(++count)
    if (temp?.key == temp?.right?.key) {
      temp.right = temp.right.right;
    }
 else{  temp = temp.right;
    // console.log(temp)
  }}

  return temp;
};

// console.log("~~~~~~~~~~~~~~~~~~`")
