// list out fibonacci numbers up to the given position

const fibonacci = num => {
    if (num === 1) {
        return [1];
    } else if (num === 2) {
        return [1, 1];
    } else {
        let list = fibonacci(num - 1);
        let len = list.length;
        list.push(list[len - 1] + list[len - 2]);
        return list;
    }
};

fibonacci(9);
