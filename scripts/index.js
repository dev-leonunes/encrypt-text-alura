const textToProcessing = document.getElementsByClassName("display__processing-area__textarea");

const encryptButton = document.getElementById("button1");
const decryptButton = document.getElementById("button2");

const getTextToProcessing = (text) => {
    text = textToProcessing[0].value;
    return text;
}

const processingText = (text) => {
    text = getTextToProcessing();
    
    const textRules = /^[a-z\s.,!?]+$/;
    
    if (!textRules.test(text)) {
        displayResult("Erro: O texto está fora do padrão");
    } else {
        return text;
    }
}

const encrypt = (text) => {
    text = processingText(text);

    const encryptRules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const encryptedText = text.split('')
    .map(letter => encryptRules[letter] || letter)
    .join('');
    
    displayResult(encryptedText);
}

const decrypt = (text) => {
    text = processingText(text);

    const decryptRules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const decryptedText = text.split(/(enter|imes|ai|ober|ufat)/)
    .map(part => decryptRules[part] || part)
    .join('');

    displayResult(decryptedText);
}

const displayResult = (result) => {
    const resultAreaText = document.querySelector(".display__result-area__text");
    const titleToHide = document.querySelector(".display__result-area__title");
    const messageToHide = document.querySelector(".display__result-area__message");
    const imgToHide = document.querySelector(".display__result-area__img");
    const button = document.querySelector(".display__result-area__button");

    resultAreaText.textContent = result;

    titleToHide.remove();
    messageToHide.remove();
    imgToHide.remove();
    button.style.visibility = "visible";
}

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;