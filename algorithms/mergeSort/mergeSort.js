// takes a single unsorted array and splits it into two halves
const mergeSort = arr => {
    if (arr.length < 2) {
        return arr;
    }
    let middleIndex = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, middleIndex);
    let secondHalf = arr.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

//merges two sorted arrays into one sorted array
const merge = (arr1, arr2) => {
    let result = [];
    while (arr1.length !== 0 && arr2.length !== 0) {
        let smaller;
        if (arr1[0] < arr2[0]) {
            smaller = arr1.shift();
        } else {
            smaller = arr2.shift();
        }
        result.push(smaller);
    }

    // add items from array that are left
    if (arr1.length !== 0) {
        result.push(...arr1);
    } else {
        result.push(...arr2);
    }
    return result;
};

mergeSort([5, 7, 2, 9, 8, 7, 45, 23, 1, 4, 2]);
