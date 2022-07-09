const Stack = require("../stack");

var isValid = function (s) {

//     //bruteforce trying
//   let elements = [];
//   for (i in s) {
//     elements.push(s[i]);
//   }
//   console.log("elements", elements);
//   const stack = new Stack();

//   while (elements.length > 0) {
//     if (stack.isEmpty()) {
//       stack.push(elements[0]);

//       elements.shift();
//       console.log("elements", elements);

//       console.log("16", stack.toString());
//     } else if (stack.peek() == "(" && elements[0] == ")") {
//       stack.pop();
//       elements.shift();
//       console.log("elements22", elements);

//       console.log("17", stack.toString());
//     } else if (stack.peek() == "{" && elements[0] == "}") {
//       stack.pop();
//       elements.shift();
//       console.log("186", stack.toString());
//     } else if (stack.peek() == "[" && elements[0] == "]") {
//       stack.pop();
//       elements.shift();
//       console.log(stack.toString());
//     } else stack.push(elements[0]);
//     elements.shift();
//   }
//   console.log("34", stack.toString());
//valid solution

checkValidPair=(a)=>{
    // console.log(first)

    if(stack.peek()=="(" && a==")"){
        return true
    }
    if(stack.peek()=="{" && a=="}"){
        return true
    }
    if(stack.peek()=="[" && a=="]"){
        return true
    }
    else return false
}

    let n = s.length;
    // console.log(n);
    const stack = new Stack();
    for (let i = 0; i <=n ; i++) {
      if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
        stack.push(s[i]);
        console.log(stack.peek())
      } else if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
        if (stack.isEmpty() || !checkValidPair(s[i])) {

          return false;
        } else {
          stack.pop();
        }
      }
    }
    // console.log("stack", stack.toString());
    return stack.isEmpty() ? true : false;
};

console.log(isValid("(}"));
