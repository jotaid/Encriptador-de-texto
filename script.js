function encrypt(text) {
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        encryptedText += String.fromCharCode(charCode + 3);
    }
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        decryptedText += String.fromCharCode(charCode - 3);
    }
    return decryptedText;
}

// Validación para permitir solo letras minúsculas sin acentos
function isValidText(text) {
    const regex = /^[a-z\s]+$/; // Solo minúsculas y espacios
    return regex.test(text);
}

function updateOutput(visible, text) {
    const outputText = document.getElementById("outputText");
    const outputPlaceholder = document.querySelector(".output-placeholder");

    if (visible) {
        outputPlaceholder.style.display = "none";
        outputText.style.display = "block";
        outputText.value = text;
    } else {
        outputPlaceholder.style.display = "flex";
        outputText.style.display = "none";
    }
}

document.getElementById("encryptBtn").addEventListener("click", function () {
    let inputText = document.getElementById("inputText").value;
    if (inputText && isValidText(inputText)) {
        let outputText = encrypt(inputText);
        updateOutput(true, outputText);
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
    }
});

document.getElementById("decryptBtn").addEventListener("click", function () {
    let inputText = document.getElementById("inputText").value;
    if (inputText && isValidText(inputText)) {
        let outputText = decrypt(inputText);
        updateOutput(true, outputText);
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
    }
});

