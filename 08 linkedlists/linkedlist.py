class LinkedListItem (object):
  def __init__(self, value, next=None):
    self.value = value
    self.next = None
    self.prev = None


class LinkedList (object):
  def __init__(self, head):
    self.head = None
    self.tail = None
    self.length = 0
    self._setHead(head)

  def _setHead(self, head):
    self.head = self.tail = None
    self.length = 0

    if (not head is None):
      self.head = head
      self.length = 1

      item = head
      while (item.next):
        item = item.next
        self.length += 1

      self.tail = item

  def append(self, item):
    if (self.tail):
      self.tail.next = item
      item.prev = self.tail
      self.tail = item
      self.length += 1
    else:
      self._setHead(item)

  def prepend(self, item):
    if (self.head):
      item.next = self.head
      self.head.prev = item
      self.head = item
      self.length += 1
    else:
      self._setHead(item)

  def traverseTo(self, index):
    current = self.head
    i = 0
    while (i < index):
      current = current.next
      i += 1

    return current

  def insert(self, index, item):
    if (index == 0):
      self.prepend(item)
      return

    if (index >= self.length):
      self.append(item)
      return

    current = self.traverseTo(index - 1)

    item.next = current.next
    item.prev = current
    current.next = item
    item.next.prev = item
    self.length += 1

  def delete(self, index):
    if (0 == index):
      self.head = self.head.next
      self.length -= 1

      if (self.length == 1):
        self.tail = self.head
      elif (self.length == 0):
        self.tail = None
      else:
        self.head.prev = None

      return

    current = self.traverseTo(index)

    current.prev.next = current.next
    if (current.next):
      current.next.prev = current.prev

    if (self.length - 1 == index):
      self.tail = current.prev

    self.length -= 1

  def values(self):
    item = self.head

    values = []
    while (item):
      values.append(item.value)
      item = item.next

    return values

  def reverse(self):
    current = self.tail
    while (current):
      tmpPrev = current.prev
      tmpNext = current.next

      current.next = current.prev
      current.prev = tmpNext

      current = tmpPrev

    tmpTail = self.tail
    self.tail = self.head
    self.head = tmpTail

  def print(self):
    current = self.head
    while (current):
      print("%d --> ( %d ) --> %d",
            current.prev.value if not current.prev is None else "",
            current.value,
            current.next.value if not current.next is None else "")

      current = current.next


lst = LinkedList(None)
lst.append(LinkedListItem(3))
lst.append(LinkedListItem(4))
lst.append(LinkedListItem(5))
lst.prepend(LinkedListItem(1))
lst.insert(1,  LinkedListItem(2))
lst.reverse()
print(lst.values())
lst.delete(0)
print(lst.values())
