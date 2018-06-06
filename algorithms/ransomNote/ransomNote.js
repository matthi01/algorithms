//harmless ransom note with hash table - linear time complexity

const harmlessRansomNote = (noteText, magazineText) => {
    const noteArr = noteText.split(" ");
    const magazineArr = magazineText.split(" ");

    const magazineObj = {};
    let possible = true;

    magazineArr.forEach(word => {
        if (!magazineObj[word]) {
            magazineObj[word] = 0;
        }
        magazineObj[word]++;
    });

    noteArr.forEach(word => {
        if (!magazineObj[word] || magazineObj[word] <= 0) {
            possible = false;
        } else {
            magazineObj[word]--;
        }
    });
    return possible;
};

harmlessRansomNote(
    "something random",
    "This is some random text to use in this random note something"
);
