class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = this.last = null;
    this.length = 0;
  }

  isEmpty() { return this.length == 0; }

  peek() {
    if (this.first)
      return this.first.value;

    return null;
  }

  enqueue(value) {
    let node = new Node(value);

    if (this.length == 0) {
      this.first = this.last = node;
    }
    else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
  }


  dequeue() {
    if (this.length == 0)
      return null;

    var tmpValue = this.peek();
    if (this.length == 1) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length--;
    return tmpValue;
  }
}


var que = new Queue();
que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
que.dequeue();
que.dequeue();
que.dequeue();

console.log(que);