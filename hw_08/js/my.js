const hero = ['Ivan'];
const native = ['York','Of'];
const destination = ['Poltava','In'];

let rainbow = destination
    .concat(native, hero)
    .reverse();

rainbow.splice(0,1,`Richard`);
rainbow.splice(3,0,'Gave','Battle');
rainbow.splice(-1,1,'Vain');

const colors = [`#f2453d`, `#fd9827`, `#feea4e`, `#8dc252`, `#1eabf1`, `#4154b3`, `#9b2fae`];

let renderColors = [];
let renderNames = [];

for (let i=0; i<rainbow.length; i++){
    renderColors.push(`<span class="round" style="background: ${colors[i]}"></span>`);
    renderNames.push(`<span class="text">${rainbow[i]}</span>`);
}

document.write(`<div>${renderColors.join(``)}</div><div>${renderNames.join(``)}</div>`);