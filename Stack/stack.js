module.exports = class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  isEmpty() {
    return this.count == 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count = this.count + 1;
  }
  pop() {
    if (this.isEmpty()) {
      return "";
    }

    --this.count;

    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  size() {
    return this.count;
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
};

// const stack = new Stack();
// stack.push(4);
// console.log("stack count",stack.count)
// console.log("stack")
// stack.push(40)
// console.log("stack count",stack.count)
// console.log("stack")
// stack.pop()
// console.log("stack count",stack.count)
// console.log("stack")
// console.log(1);
// console.log(stack.toString());
