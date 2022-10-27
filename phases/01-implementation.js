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
  // hash mod changes so index changes,


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
    if (!curr) return;

    if (curr.key === key) return curr.value;

    while (curr.next) {
      curr = curr.next;
      if (curr.key === key) return curr.value;
    }

    return undefined;
  }

// call insert into nexts, inside for loop
  resize() {

    let oldArray = this.data;
    this.capacity *= 2;
    let newArray = new Array(this.capacity).fill(null);
    this.count = 0;
    this.data = newArray;

    for (let i = 0; i < oldArray.length; i++){
      let curr = oldArray[i];
      if (curr === null) {
        continue;
      } else {
        this.insert(curr.key, curr.value);
        while(curr.next) {
          curr = curr.next;
          this.insert(curr.key, curr.value);
        }
      }
    }
  }

  delete(key) {
    let i = this.hashMod(key);
    let curr = this.data[i];
    if (!curr) return "Key not found";

    if (curr.key === key) {
      if (curr.next) {
        this.data[i] = curr.next;
        this.count--;
        return;
      } else {
        this.data[i] = undefined;
        this.count--;
        return;
      }
    }

    while (curr.next) {
      curr = curr.next;
      if (curr.key === key) {
        let target = curr.key;
        curr = this.data[i];
        while (curr.next) {
          if (curr.next.key === target) {
            curr.next = curr.next.next;
          }
          curr = curr.next;
        }
      }
    }
    this.count--;
    return "Key not found";
  }
}

let hashTable = new HashTable(4);
hashTable.insert("key1", "value1")
hashTable.insert("key2", "value2")
hashTable.insert("key3", "value3")
hashTable.insert("key5", "value5")
hashTable.insert("key9", "value9")
hashTable.insert("key10", "value10")
console.log("before delete", hashTable.data)
console.log(hashTable.delete("key2"))
console.log(hashTable.delete("key10"))
console.log(hashTable.delete("key10"))

// // console.log(hashTable.data)
// hashTable.delete("key9")
// // console.log(hashTable.data)
// hashTable.delete("key10")
// console.log("after delete 2, 9, 10", hashTable.data);
// console.log(hashTable.delete("key2"))
// console.log("after delete 2 again", hashTable.data);
// console.log(hashTable.delete("key10"))

module.exports = HashTable;
