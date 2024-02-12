const textToProcessing = document.getElementsByClassName("display__processing-area__textarea");

const encryptButton = document.getElementById("button1");
const decryptButton = document.getElementById("button2");

const getTextToProcessing = (text) => {
    text = textToProcessing[0].value;
    console.log(text);
}

const abc = "abc";

encryptButton.onclick = getTextToProcessing;
decryptButton.onclick = getTextToProcessing;