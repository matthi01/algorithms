// examples: race car / madam, I'm adam

const isPalindrome = text => {
    text = text.toLowerCase();
    let charArr = text.split("");
    const validChars = "abcdefghijklmnopqrstuvwxyz".split("");

    let lettersArr = [];

    charArr.forEach(char => {
        if (validChars.indexOf(char) > -1) {
            lettersArr.push(char);
        }
    });

    if (lettersArr.join("") === lettersArr.reverse().join("")) {
        return true;
    } else {
        return false;
    }
};

isPalindrome("Madam, I'm Adam");
