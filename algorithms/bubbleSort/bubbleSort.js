// for each iteration, the largest number in array will bubble to the top
// so for each iteration, the loop becomes one index shorter (number of iterations == arr.length - 1)
const bubbleSort = arr => {
    let lead;
    let trail;

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
};

bubbleSort([4, 8, 2, 34, 12, 88, 77, 4, 56, 33, 2, 43, 98, 7, 1]);
