const sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];

const summer_sports = sports.slice(5, 11);

const winter_sports = sports.slice(0, 5);

const fruits = winter_sports.slice(2, 3).concat(summer_sports.slice(2, 4));

summer_sports.splice(2, 2);
winter_sports.splice(2, 1);

const table = [];

let tempArr = [];

let list = tempArr.concat(`*** Winter sports ***`,
    winter_sports,
    ``,
    `*** Summer sports ***`,
    summer_sports,
    ``,
    `*** Fruits ***`,
    fruits);

console.log(list);


for ( let i = 0; i<list.length; i++) {
    if (Array.isArray(list[i])) {
        table.push(`<tr><td>${list[i].join(`:`)}</td></tr>`)
    } else {
        table.push(`<tr><td>${list[i]}</td></tr>`);
    }
}

document.write(`<table>
    ${table.join(``)}
</table>`);