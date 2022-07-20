const inputText = prompt("Enter your message:");
const operationId = Number(prompt(`Choose operation:
1. Get Unicode
2. Remove symbol
3. Change symbol to emoji
4. Get amount of letters`));

let symbolIndex;
const smile = ["😂", "😈", "💛", "💙", "🌤", "😃", "🎉", "🥳", "😳", "🙈"];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const smileIndex = getRandomIntInclusive(0, 9);

switch (operationId) {
    case 1:
        symbolIndex = Number(prompt("Enter symbol index:"));
        alert("Unicode: " + inputText.charCodeAt(symbolIndex));
        break;

    case 2:
        symbolIndex = Number(prompt("Enter symbol index:"));
        alert("Result: " + inputText.substring(0, symbolIndex) + inputText.substring(symbolIndex + 1, inputText.length));
        break;

    case 3:
        symbolIndex = Number(prompt("Enter symbol index:"));
        alert("Result: " + inputText.substring(0, symbolIndex) + smile[smileIndex] + inputText.substring(symbolIndex + 1, inputText.length));
        break;

    case 4:
        alert(inputText.replaceAll(" ", "").length + " letters");
}