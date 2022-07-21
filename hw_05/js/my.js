const START = confirm(`Tell me the three most important words 💚`);

if (START) {
    const wordCount = 3;
    let finalString = ``;

    for (let i = 1; i <= wordCount; i++){
        let importantWord,
            wordHasNumber;
        do {
            importantWord = prompt(`Enter a word #${i}:`);

            if (importantWord) importantWord = importantWord.trim();
            wordHasNumber = false;

            for (let j = 0; j < importantWord.length; j++){
                let currentLetter = importantWord[j];

                if ( !isNaN(+currentLetter) ){
                    wordHasNumber = true;
                    break;
                }
            }

        } while (!importantWord
        || wordHasNumber);

        let tool;

        do{
            tool = prompt(`Choose formatting: uppercase, lowercase or capitalize`);

            if(tool) tool = tool.replaceAll(` `, ``).toLowerCase();

        } while (!tool || tool !== 'uppercase'
        && tool !== 'lowercase'
        && tool !== 'capitalize');

        switch (tool) {
            case 'uppercase':
                importantWord = importantWord.toUpperCase();
                break;

            case 'lowercase':
                importantWord = importantWord.toLowerCase();
                break;

            case 'capitalize':
                importantWord = importantWord[0].toUpperCase() + importantWord.slice(1).toLowerCase();
                break;
        }
        finalString += importantWord;
        finalString += i === wordCount ? `!` : ` `;
    }

    console.log(finalString);
}