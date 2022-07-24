class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }
}

 class LinkedList {
  constructor(key) {
    this.head = null;
  }
  addElement(key) {
    let node = new Node(key);

    if (this.head == null) {
      this.head = node;
      return;
    } else {
      let temp = this.head;
      while (temp.right !== undefined) {
        temp = temp.right;
      }
      temp.right = node;
    }
  }
  traverse() {
    let temp = this.head;
    // console.log(temp.right);
    while (temp?.key != undefined) {
      console.log(temp.key);
      temp = temp.right;
    }
  }
}

let LL = new LinkedList();
LL.addElement(5);
LL.addElement(55);
LL.addElement(555);
LL.addElement(5555);
LL.traverse();
