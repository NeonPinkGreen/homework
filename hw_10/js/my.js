const animals = [
    ['🐭','mouse','Jerry'],
    ['🐹','hamster','Biscuit'],
    ['🐰','rabbit','Bugs'],
    ['🦊','fox','Mrs. Fox'],
    ['🐻','bear','Paddington']
];

const food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
];

const universes = [
    ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
    ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo(printArray, tableTitle){

    const table = [];

    for (let j=0; j<printArray.length; j++) {
        table.push(`<tr>`);

        for (let i=0; i<printArray[j].length; i++){

            if (Array.isArray(printArray[j][i])) {
                table.push(`<td>${printArray[j][i].join(`; `)}</td>`);

            } else {
                table.push(`<td>${printArray[j][i]}</td>`);
            }
        }
        table.push(`</tr>`);
    }

    document.write(`<table><caption>${tableTitle} info</caption><tbody>${table.join(``)}</tbody></table>`);
}

getInfo(animals, `Animals`);
getInfo(food, `Food`);
getInfo(universes, `Universes`);
