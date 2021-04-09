// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.frontStack = [];
  this.backStack = [];
};

MyQueue.prototype._moveToBackStack = function () {
  if (this.frontStack.length > 0) {
    while (this.frontStack.length > 0) {
      this.backStack.push(this.frontStack.pop());
    }
  }
};
MyQueue.prototype._moveToFrontStack = function () {
  if (this.backStack.length > 0) {
    while (this.backStack.length > 0) {
      this.frontStack.push(this.backStack.pop());
    }
  }
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
  if (this.backStack.length > 0) {
    this._moveToFrontStack();
  }
  this.frontStack.push(x);
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function () {
  this._moveToBackStack();
  return this.backStack.pop();
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function () {
  this._moveToBackStack();
  return this.backStack[this.backStack.length - 1];
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
  return this.frontStack.length == 0 && this.backStack.length == 0;
};



var que = new MyQueue();
que.push(1);
que.push(2);
que.push(3);
console.log(que);


console.log(que.pop());
console.log(que);

console.log(que.pop());
console.log(que);

console.log(que.pop());
console.log(que);


console.log(que.pop());
console.log(que);