class Hashtable(object):
  def __init__(self, size):
    self.data = [None] * size
  
  def __hash(self, key):
    hash = 0

    for  i in range (len(key)):
      hash = (hash + ord(key[i]) * i) % len(self.data)

    return hash

  def set(self, key, value):
    address = self.__hash(key)

    if (self.data[address] is None):
      self.data[address] = []

    self.data[address].append([key, value])

    print (self.data)

  def get(self, key):
    address = self.__hash(key)

    item = self.data[address]
    if (item is None):
      return None

    for i in range(len(item)):
      if (item[i][0] == key):
        return item[i][1];

    return None

  def keys(self):
    keysArr = []

    for i in range(len(self.data)):
      item = self.data[i]
      if (item is None):
        continue

      for j in range(len(item)):
        if not item[j][0] in keysArr:
          keysArr.append(item[j][0]);

    return keysArr
