// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/

class MyQueue {
  constructor() {
    this.frontStack = [];
    this.backStack = [];
  }

  _moveToBackStack() {
    if (this.frontStack.length > 0) {
      while (this.frontStack.length > 0) {
        this.backStack.push(this.frontStack.pop());
      }
    }
  }
  _moveToFrontStack() {
    if (this.backStack.length > 0) {
      while (this.backStack.length > 0) {
        this.frontStack.push(this.backStack.pop());
      }
    }
  }

  enqueue(value) {
    if (this.backStack.length > 0) {
      this._moveToFrontStack();
    }
    this.frontStack.push(value);
  }

  dequeue() {
    this._moveToBackStack();
    return this.backStack.pop();
  }

  peek() {
    this._moveToBackStack();
    return this.backStack[this.backStack.length - 1];
  }

  empty() {
    return this.frontStack.length == 0 && this.backStack.length == 0;
  }
}



var que = new MyQueue();
que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
console.log(que);


console.log(que.dequeue());
console.log(que);

console.log(que.dequeue());
console.log(que);

console.log(que.dequeue());
console.log(que);


console.log(que.dequeue());
console.log(que);