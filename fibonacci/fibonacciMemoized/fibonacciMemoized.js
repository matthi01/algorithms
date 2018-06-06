// Memoized Fibonacci
// same as position version but better performance
// returns the value at position index
const fibMemo = (index, cache) => {
    cache = cache || [];
    if (cache[index]) {
        return cache[index];
    } else {
        if (index <= 2) {
            return 1;
        } else {
            cache[index] =
                fibMemo(index - 2, cache) + fibMemo(index - 1, cache);
        }
    }

    return cache[index];
};

fibMemo(10000);
