class Stack {
  constructor() {
    this.array = [];
    this.length = 0;
  }

  push(value) {
    this.array[this.length]  = value;
    this.length++;
  }

  peek() {
    if (this.length == 0)
      return null;
    return this.array[this.length - 1] ;
  }

  pop() {
    var tmpValue = this.peek();

    if (tmpValue) {
      this.array.splice(this.length - 1, 1);
      this.length--;
    }

    return tmpValue;
  }
}


var que = new Stack();
que.push(1);
que.push(2);
que.push(3);

que.pop();

console.log(que);