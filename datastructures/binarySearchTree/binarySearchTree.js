class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

BST.prototype.insert = function(value) {
    const newBST = new BST(value);
    if (value <= this.value) {
        if (!this.left) {
            this.left = newBST;
        } else {
            this.left.insert(value);
        }
    } else {
        if (!this.right) {
            this.right = newBST;
        } else {
            this.right.insert(value);
        }
    }
};

BST.prototype.contains = function(searchValue) {
    if (this.value === searchValue) {
        return true;
    } else if (searchValue < this.value) {
        if (!this.left) {
            return false;
        } else {
            return this.left.contains(searchValue);
        }
    } else if (searchValue > this.value) {
        if (!this.right) {
            return false;
        } else {
            return this.right.contains(searchValue);
        }
    }
};

// order - in-order / pre-order / post-order
// in-order - in order of values
// pre-order - current node first - structure of tree
// post-order - hit all the left children first, then right children, then the parent (of each sub-tree)
BST.prototype.depthFirstTraversal = function(iteratorFunction, order) {
    if (order === "pre-order") {
        iteratorFunction(this.value, "pre-order");
    }

    if (this.left) {
        this.left.depthFirstTraversal(iteratorFunction, order);
    }

    if (order === "in-order") {
        iteratorFunction(this.value);
    }

    if (this.right) {
        this.right.depthFirstTraversal(iteratorFunction, order);
    }

    if (order === "post-order") {
        iteratorFunction(this.value);
    }
};

// process each node level by level
BST.prototype.breadthFirstTraversal = function(iteratorFunction) {
    // shift nodes out of the front of the queue, run iterator on that node
    // then push its child nodes into the back of the queue
    let queue = [this];
    while (queue.length) {
        let treeNode = queue.shift();
        iteratorFunction(treeNode.value);
        if (treeNode.left) {
            queue.push(treeNode.left);
        }
        if (treeNode.right) {
            queue.push(treeNode.right);
        }
    }
};

BST.prototype.getMinVal = function() {
    if (this.left) {
        return this.left.getMinVal();
    } else {
        return this.value;
    }
};

BST.prototype.getMaxVal = function() {
    if (this.right) {
        return this.right.getMaxVal();
    } else {
        return this.value;
    }
};

let bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(45);
bst.insert(60);
bst.insert(100);
bst.insert(10);
bst.insert(35);
bst.insert(59);
bst.insert(85);
bst.insert(105);

const log = value => {
    console.log(value);
};

// bst.breadthFirstTraversal(log);
console.log(bst.getMinVal());
console.log(bst.getMaxVal());
