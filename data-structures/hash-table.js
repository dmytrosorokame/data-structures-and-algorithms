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

  get(key) {
    const index = this._hash(key);

    const cell = this.dataMap[index];

    if (cell) {
      for (let i = 0; i < cell.length; i++) {
        const [elKey, elValue] = cell[i];

        if (elKey === key) {
          return elValue;
        }
      }
    }

    return undefined;
  }
}

const hashTable = new HashTable();
hashTable.set("myTest1", 98);
hashTable.set("myTest2", 983);
hashTable.set("myTest3", 981);
hashTable.set("myTest4", 985);
hashTable.set("myTest5", 989);
hashTable.set("myTest6", 93);
hashTable.set("myTest7", 18);
hashTable.set("myTest8", 68);

console.log(JSON.stringify(hashTable));

console.log(hashTable.get("myTest1"));
