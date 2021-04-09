class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.bottom = null;
    this.top = null;
    this.length = 0;
  }

  peek() {
    return this.top.value;
  }

  push(value) {
    let newNode = new Node(value);

    if (0 == this.length)
      this.top = this.bottom = newNode;
    else {
      let tmpTop = this.top;

      this.top = newNode;
      this.top.next = tmpTop;
    }

    this.length++;
  }

  pop() {
    let topItem = this.top;

    if (!topItem)
      return null;

    this.top = this.top.next;
    this.length--;

    if (this.length == 0) {
      this.bottom = null;
    }else if (this.length == 1){ 
      this.bottom = this.top;
    }

    return topItem.value;
  }
}


var que = new Stack();
que.push(1);
que.push(2);

console.log(que);
console.log(que.peek());
console.log(que.pop());
console.log(que);
console.log(que.pop());
console.log(que);