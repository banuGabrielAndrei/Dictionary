let dictionaryWords = [];

function addWord() {
    if (!dictionaryWords.includes(document.getElementById("wordsIn").value)) {
        dictionaryWords.push(document.getElementById("wordsIn").value);
    }
}

function searchWord() {
    let userMessage = document.getElementById("messageForUser");
    if (dictionaryWords.includes(document.getElementById("searchedWord").value)) {
        userMessage.textContent = "The word" + " " + document.getElementById("searchedWord").value + " " + "exists in the Dictionary";
    } else {
        userMessage.textContent = "The word" + " " + document.getElementById("searchedWord").value + " " + "cannot be found in the Dictionary";
    }
}