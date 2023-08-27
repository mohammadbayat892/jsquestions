function filterWords(inputString, inappropriateWords) {
    let filteredString = inputString;
    for (const word of inappropriateWords) {
        const regex = new RegExp(word, 'g');
        filteredString = filteredString.replace(regex, '*'.repeat(word.length));
    }
    return filteredString;
}

// مثال استفاده
const inputString = "این جمله حاوی کلمات نامناسب است.";
const inappropriateWords = ["کلمات", "نامناسب"];
const filteredResult = filterWords(inputString, inappropriateWords);
console.log(filteredResult);
