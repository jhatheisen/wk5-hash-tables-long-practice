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
    // Your code here
  }
}

module.exports = HashTable;
