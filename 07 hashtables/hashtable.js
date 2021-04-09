class Hashtable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  }


  get(key) {
    let address = this._hash(key);

    let item = this.data[address];
    if (undefined == item)
      return undefined;

    for (let i = 0; i < item.length; i++) {
      if (item[i][0] == key)
        return item[i][1];
    }

    return undefined;
  }

  keys() {
    const keysArr = [];

    for (let i = 0; i < this.data.length; i++) {
      itm = this.data[i];

      if (!itm)
        continue;

      for (let j = 0; j < itm.length; j++) {
        if (keysArr.some((a) => {
          return a == itm[j][0];
        }) == false)
          keysArr.push(itm[j][0]);
      }
    }

    return keysArr;
  }
  remove(key) {
    let address = this._hash(key);
    this.data[address] = undefined;
  }
}
