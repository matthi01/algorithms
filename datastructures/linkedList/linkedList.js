class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

LinkedList.prototype.addToHead = function(value) {
    let newNode = new Node(value, this.head, null);
    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }

    this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
    let newNode = new Node(value, null, this.tail);
    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.tail = newNode;
    }

    this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
    if (!this.head) {
        return null;
    }
    let val = this.head.value;
    this.head = this.head.next;

    if (this.head) {
        this.head.prev = null;
    } else {
        this.tail = null;
    }

    return val;
};

LinkedList.prototype.removeTail = function() {
    if (!this.tail) {
        return null;
    }
    let val = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }

    return val;
};

LinkedList.prototype.search = function(searchValue) {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === searchValue) {
            return currentNode.value;
        }
        currentNode = currentNode.next;
    }
    return null;
};

LinkedList.prototype.indexOf = function(searchValue) {
    let currentNode = this.head;
    let index = 0;
    let indexArr = [];

    while (currentNode) {
        if (currentNode.value === searchValue) {
            indexArr.push(index);
        }
        currentNode = currentNode.next;
        index++;
    }
    return indexArr;
};

let ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
ll.addToHead(200);
ll.addToTail(1);

console.log(ll.indexOf(200));
