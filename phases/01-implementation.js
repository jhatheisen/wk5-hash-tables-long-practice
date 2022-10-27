class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }
  // hash mod changes so index changes


  insert(key, value) {
    const newPair = new KeyValuePair(key, value);
    const i = this.hashMod(key);
    let curr = this.data[i];
    if (!curr) {
      this.data[i] = newPair;
    } else if (curr.key === key) {
      curr.value = value;
    } else {
      while (curr.next) {
        curr = curr.next;
        if (curr.key === key) {
          curr.value = value;
          return;
        }
      }

      newPair.next = this.data[i];
      this.data[i] = newPair;
    }
    this.count++;
  }


  read(key) {
    // we do hashmod to find i with key,
    // if it's the first value return
    // if theres nexts while loop through it
    // return und
    let i = this.hashMod(key);
    let curr = this.data[i];
    console.log(curr.key);
    if (curr.key === key) return curr.value;

    while (curr.next) {
      curr = curr.next;
      if (curr.key === key) return curr.value;
    }

    return undefined;
  }


  resize() {
    // make a new array *2 size
    // for loop through old array,
    // for each index, copy the old array, value, to the new one
    // make new array, old one
    // *2 capacity

    let newArr = new Array(this.capacity * 2).fill(null);
    for (let i = this.capacity*2; i < this.data.length * 2; i++) {
      newArr[i] = this.data[i];
    }
    this.data = newArr;
    this.capacity *= 2;
  }


  delete(key) {
    // Your code here
  }
}

let hashTable = new HashTable(2);

hashTable.insert("key1", "value1");
    hashTable.insert("key2", "value2");
    hashTable.insert("key3", "value3");
    hashTable.resize();
    console.log(hashTable.read('key1')); // value1

module.exports = HashTable;
