// Sieve Of Eratosthenes
// return all prime numbers up to a given number

// create an array with up to num index - each value will be a boolean if prime, set all to true.
// go through array and mark every multiple of the current number as false
// note: stop looping through at the square root of num
const sieveOfEratosthenes = num => {
    let primes = [];
    for (let i = 0; i <= num; i++) {
        if (i < 2) {
            primes.push(false);
        } else {
            primes.push(true);
        }
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        for (let j = 2; j * i <= num; j++) {
            primes[i * j] = false;
        }
    }

    let result = [];
    primes.forEach((prime, index) => {
        if (prime) {
            result.push(index);
        }
    });

    return result;
};

sieveOfEratosthenes(20);
