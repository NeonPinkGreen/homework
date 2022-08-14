const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

const arrayForEach = JSON.parse(JSON.stringify(users));

arrayForEach.forEach((item, i, arr) => {
    arr[i][0] += `!`;
})

let arrayMap = JSON.parse(JSON.stringify(users));

arrayMap = arrayMap.map((item, i, arr) => {
    item[0] += `?`;
    return arr[i];
});

const arrayFiltered = users.filter(item => item[1] === `red`);

arrayForEach.forEach((item, i, arr) => {
    arr[i][0] += `!`;
});

console.log(users);
console.log(arrayForEach);
console.log(arrayMap);
console.log(arrayFiltered);

const tHead = [
    ["Name"],
    ["Command"],
    ["Score"],
    ["Data"],
];

let printArray = [];
let totalScore = 0;

arrayFiltered.map((item, i, arr) => {
    printArray.push(item.slice(0, 3).join(`</td><td>`).concat(`</td><td>${arr[i][3].join(`; `)}`));
    totalScore += item[2];
});


document.write(`
<table>
    <thead>
        <tr>
            ${tHead.map(item => `<th>${item}</th>`).join(``)}
        </tr>
    </thead>
    <tbody>
        ${printArray.map(item => `<tr><td>${item}</td></tr>`).join(``)}
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">Total score: ${totalScore}</td>
        </tr>
    </tfoot>`);