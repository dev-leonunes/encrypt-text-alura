const textToProcessing = document.getElementsByClassName("display__processing-area__textarea");

const encryptButton = document.getElementById("button1");
const decryptButton = document.getElementById("button2");

const getTextToProcessing = (text) => {
    text = textToProcessing[0].value;
    return text;
}

const processingText = (text) => {
    text = getTextToProcessing();
    
    const textRules = /^[a-z]+$/
    
    if (!textRules.test(text)) {
        return "Erro: O texto está fora do padrão"
    } else {
        return text
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
    console.log("🚀 ~ encrypt ~ encryptedText:", encryptedText)
    return encryptedText;
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
    console.log("🚀 ~ decrypt ~ decryptedText:", decryptedText)
    return decryptedText;
}

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;