// mean Median Mode

const getMean = numArr => {
    let sum = 0;
    numArr.forEach(num => {
        sum += num;
    });

    return sum / numArr.length;
};

const getMedian = numArr => {
    numArr.sort();
    let median;

    if (numArr.length % 2 === 0) {
        let mid1 = numArr[numArr.length / 2 - 1];
        let mid2 = numArr[numArr.length / 2 + 1];
        median = (mid1 + mid2) / 2;
    } else {
        median = numArr[Math.floor(numArr.length / 2)];
    }

    return median;
};

const getMode = numArr => {
    let modeObj = {};
    numArr.forEach(num => {
        if (!modeObj[num]) {
            modeObj[num] = 0;
        }
        modeObj[num]++;
    });

    let maxFrq = 0;
    let modes = [];

    for (let num in modeObj) {
        if (modeObj[num] > maxFrq) {
            maxFrq = modeObj[num];
            modes = [num];
        } else if (modeObj[num] === maxFrq) {
            modes.push(num);
        }
    }

    return modes;
};

const meanMedianMode = numArr => {
    return {
        mean: getMean(numArr),
        median: getMedian(numArr),
        mode: getMode(numArr)
    };
};

meanMedianMode([1, 1, 2, 6, 3]);
