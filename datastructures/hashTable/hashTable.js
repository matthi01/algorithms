class HashTable {
    // define how many spaces the hash table should have
    constructor(size) {
        this.buckets = Array(size); // entire hash table itself
        this.numBuckets = this.buckets.length;
    }
}

class HashNode {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next || null; // next node in case of collisions
    }
}

// get a numeric total for characters in the key, then use the modulus with the size of the table to find an appropriate spot
HashTable.prototype.hash = function(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    let bucket = total % this.numBuckets;
    return bucket;
};

HashTable.prototype.insert = function(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value);
    } else if (this.buckets[index].key === key) {
        this.buckets[index].value = value;
    } else {
        let currentNode = this.buckets[index];
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                currentNode.next.value = value;
                return;
            }

            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
};

HashTable.prototype.get = function(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
        return null;
    } else {
        let currentNode = this.buckets[index];
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
};

HashTable.prototype.retrieveAll = function() {
    allNodesArr = [];
    for (let i = 0; i < this.numBuckets; i++) {
        let currentNode = this.buckets[i];
        while (currentNode) {
            allNodesArr.push(currentNode);
            currentNode = currentNode.next;
        }
    }

    return allNodesArr;
};

let ht = new HashTable(30);
ht.insert("matthias", 44444);
ht.insert("matthias", 55555);
ht.insert("vittoria", 33);
ht.insert("joey", 22);
console.log(ht.retrieveAll());
