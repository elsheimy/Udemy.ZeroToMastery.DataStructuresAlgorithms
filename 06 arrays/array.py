class MyArray:
  def __init__(self):
    self.length = 0
    self.data = {}

  def get(self, index):
    return self.data[index]

  def push(self, item):
    self.data[self.length] = item
    self.length += 1

  def pop(self):
    itm = self.data[self.length - 1]
    del self.data[self.length - 1]
    self.length -= 1
    return itm

  def delete(self, index):
    itm = self.data[index]
    self.shiftItems(index)
    return itm    

  def shiftItems(self, index):
    for i in range(index, self.length - 1):
      self.data[index] = self.data[index + 1]
    del self.data[self.length - 1]
    self.length -= 1

    


arr =  MyArray()
arr.push('hello')
arr.push('hello w')
print(arr.delete(0))
print(arr.get(0))
print(arr.length)