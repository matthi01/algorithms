// reverse each word in a given text without changing the order of the words
// NOT using Array.reverse()

const reverseWords = originalText => {
    let originalTextArr = originalText.split(" ");
    let reversedTextArr = [];
    let reversedText;

    originalTextArr.forEach(forwardWord => {
        let forwardWordArr = forwardWord.split("");
        let reverseWordArr = [];
        for (let i = forwardWordArr.length; i >= 0; i--) {
            reverseWordArr.push(forwardWord[i]);
        }

        reversedTextArr.push(reverseWordArr.join(""));
    });

    reversedText = reversedTextArr.join(" ");
    return reversedText;
};

reverseWords("this is a string of words");
