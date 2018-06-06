// shift every letter in the given string by the given number of characters

function caesarCipher(str, num) {
    // handle the case of someone entering a number larger than 25...
    num = num % 26;

    const lowerCaseText = str.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    let newMessage = "";

    for (let i = 0; i < lowerCaseText.length; i++) {
        let currentLetter = lowerCaseText[i];

        if (currentLetter === " ") {
            newMessage += currentLetter;
            continue;
        }

        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;

        // if new index goes over the max, loop back around
        if (newIndex > 25) {
            newIndex - 26;
        }

        // same if a negative number is used
        if (newIndex < 0) {
            newIndex = 26 + newIndex;
        }

        // put capital letters back in
        if (str[i] === str[i].toUpperCase()) {
            newMessage += alphabet[newIndex].toUpperCase();
        } else {
            newMessage += alphabet[newIndex];
        }
    }

    return newMessage;
}

caesarCipher("hellO", 1);
