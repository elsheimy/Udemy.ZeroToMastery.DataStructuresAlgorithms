class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }


  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const itm = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return itm;
  }

  delete(index) {
    const itm = this.data[index];
    this.shiftItems(index);
    return itm;
  }

  shiftItems(index) {
    for (let i = index; i <= this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
