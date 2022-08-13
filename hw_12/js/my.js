const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

const newArrayForEach = JSON.parse(JSON.stringify(users));

newArrayForEach.forEach((item, i, arr) => {
    arr[i][0] += `!`;
})

const newArrayMap = users.map((item, i, arr) => {
    item[0] += `?`;
    return arr[i];
});

const newArrayFiltered = users.filter(item => item[1] === `red`);

console.log(users);
console.log(newArrayForEach);
console.log(newArrayMap);
console.log(newArrayFiltered);