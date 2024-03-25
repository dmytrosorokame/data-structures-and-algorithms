class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);

    return this;
  }
}

const hashTable = new HashTable();
hashTable.set("myTest1", 98);
hashTable.set("myTest2", 98);
hashTable.set("myTest3", 98);
hashTable.set("myTest4", 98);
hashTable.set("myTest5", 98);
hashTable.set("myTest6", 98);
hashTable.set("myTest7", 98);
hashTable.set("myTest8", 98);

console.log(JSON.stringify(hashTable));
