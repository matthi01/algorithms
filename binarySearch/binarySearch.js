// Search for a given value (key) inside of a list
// Run in O (log n)
// Assume numArray is already ordered
// use recursion

const binarySearch = (numArray, key) => {
    let middleIndex = Math.floor(numArray.length / 2);
    let middleElem = numArray[middleIndex];

    if (middleElem === key) {
        return true;
    } else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIndex, numArray.length), key);
    } else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIndex), key);
    }
};

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
