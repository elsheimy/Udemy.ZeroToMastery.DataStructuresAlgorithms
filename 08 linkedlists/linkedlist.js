class LinkedListItem {
  constructor(value, next) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(head) {
    this._setHead(head);
  }

  _setHead(head) {
    this.head = this.tail = undefined;
    this.length = 0;

    if (head) {
      this.head = head;
      this.length = 1;

      let item = head;
      while (item.next) {
        item = item.next;
        this.length++;
      }

      this.tail = item;
    }
  }

  append(item) {
    if (this.tail) {
      this.tail.next = item;
      item.prev = this.tail;
      this.tail = item;
      this.length++;
    }
    else {
      this._setHead(item);
    }
  }

  prepend(item) {
    if (this.head) {
      item.next = this.head;
      this.head.prev = item;
      this.head = item;
      this.length++;
    } else {
      this._setHead(item);
    }
  }

  traverseTo(index) {
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }

    return current;
  }

  insert(index, item) {
    if (index == 0) {
      this.prepend(item);
      return;
    }

    if (index >= this.length) {
      this.append(item);
      return;
    }


    let current = this.traverseTo(index - 1);

    item.next = current.next;
    item.prev = current;
    current.next = item;
    item.next.prev = item;
    this.length++;
  }

  delete(index) {
    if (0 == index) { // head
      this.head = this.head.next;
      if (this.length == 1)
        this.tail = this.head;
      this.head.prev = null;
      this.length--;
      return;
    }

    let current = this.traverseTo(index);

    current.prev.next = current.next;
    if (current.next) {
      current.next.prev = current.prev;
    }

    if (this.length - 1 == index) {
      this.tail = current.prev;
    }

    this.length--;
  }

  values() {
    let item = this.head;

    let values = [this.length];
    let idx = 0;
    while (item) {
      values[idx++] = item.value;
      item = item.next;
    }

    return values;
  }

  reverse() {
    let current = this.tail;
    while (current) {
      let tmpPrev=  current.prev;
      let tmpNext = current.next;

      current.next=  current.prev;
      current.prev = tmpNext;

      current = tmpPrev;
    }

    var tmpTail = this.tail;
    this.tail = this.head;
    this.head = tmpTail;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log("%d --> ( %d ) --> %d",
        current.prev ? current.prev.value : undefined,
        current.value,
        current.next ? current.next.value : undefined);

      current = current.next;
    }
  }
}





let lst = new LinkedList(null);
lst.append(new LinkedListItem(3));
lst.append(new LinkedListItem(4));
lst.append(new LinkedListItem(5));
lst.prepend(new LinkedListItem(1));
lst.insert(1, new LinkedListItem(2));
lst.reverse();
console.log(lst.values());