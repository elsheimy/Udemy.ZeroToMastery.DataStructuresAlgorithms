class LinkedListItem {
  constructor(value, next) {
    this.value = value;
    this.next = next;
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
    current.next = item;
    this.length++;
  }

  delete(index) {
    if (0 == index) { // head
      this.head = this.head.next;
      if (this.length == 1)
        this.tail = this.head;
      this.length--;
      return;
    }

    let current = this.traverseTo(index - 1);

    current.next = current.next.next;
    if (null == current.next) {
      this.tail = current;
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
}

