const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(" ");
    console.table(wordArray);
    if (wordArray == "") {
        wordArray.length = 0;
        document.getElementById("nb_texte").innerHTML = "0 mot(s)";
    } else {
        for (let i = 0; i < wordArray.length; i++) {
            switch (wordArray[i]) {
                case '-':
                    wordArray.splice(i, 1);
                case '"':
                    wordArray.splice(i, 1);
                case '':
                    wordArray.splice(i, 1);
                case '=':
                    wordArray.splice(i, 1);
                case '{':
                    wordArray.splice(i, 1);
                case '}':
                    wordArray.splice(i, 1);
                case "'":
                    wordArray.splice(i, 1);
                case '(':
                    wordArray.splice(i, 1);
                case ')':
                    wordArray.splice(i, 1);
                default:
                    break;
            }
        }
    }
    document.getElementById("nb_texte").innerHTML = wordArray.length + " mot(s)";
}

function compter() {
    let text = document.getElementById("texte").value;
    getWordCount(text);
}

setTimeout(function() {
    document.getElementById('my_div').classList.remove('hide');
    document.getElementById('my_div').classList.add('show');
    document.getElementById('boule').classList.add('hide');
}, 5000);

function reinitialiser() {
    document.getElementById("texte").value = "";
}