// pass an array of numbers and specify a sum
// return an array of arrays (pairs) of numbers whose sum is equal to the sum specified
// note: any number in the numArray can be used in multiple pairs
// avoid O (n^2)...

const twoSum = (numArray, targetSum) => {
    let pairs = [];
    let hashTable = [];
    numArray.forEach(num => {
        let counterPart = targetSum - num;
        if (hashTable.indexOf(counterPart) !== -1) {
            pairs.push([num, counterPart]);
        }

        hashTable.push(num);
    });
    console.log(pairs);
};

twoSum([1, 6, 4, 5, 3, 3], 7);
