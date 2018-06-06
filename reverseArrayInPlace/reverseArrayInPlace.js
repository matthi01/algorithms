// REVERSE ARRAY IN PLACE

// Be sure to manipulate the array passed IN
// Do NOT push elements into a new array and return that array
// Do not use Array.reverse() method

const reverseArrayInPlace = arr => {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
};

reverseArrayInPlace([1, 2, 3, 4, 5]);
