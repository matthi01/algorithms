// position indicates which number in the sequence you want returned
// ex. 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
// fibonacci(4) -> return 3
const fibonacci = position => {
    if (position <= 2) {
        return 1;
    } else {
        return fibonacci(position - 2) + fibonacci(position - 1);
    }
};

fibonacci(9);
