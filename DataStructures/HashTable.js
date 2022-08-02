class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (const [k, v] of this.keyMap[index]) {
        if (k === key) {
          return v;
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (const arrays of this.keyMap) {
      if (arrays !== undefined) {
        for (const arr of arrays) {
          const [key, value] = arr;
          keys.push(key);
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (const arrays of this.keyMap) {
      if (arrays !== undefined) {
        for (const arr of arrays) {
          const [key, value] = arr;
          values.push(value);
        }
      }
    }
    return [...new Set(values)];
  }
}

const hash = new HashTable();
hash.set("hello", "bye");
hash.set("cat", "Tom");
hash.set("dog", "Bobi");
hash.set("snake", "Bobi");
hash.set("horse", "Bobi");
