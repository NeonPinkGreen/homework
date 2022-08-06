const hero = ['Ivan'];
const native = ['York','Of'];
const destination = ['Poltava','In'];

const rainbow = hero.concat(destination, native);

rainbow.reverse();

if (rainbow[0] !== `Richard`) rainbow.unshift(`Richard`)
else rainbow.splice(1, 1);

switch (rainbow[3]){
    case `In`:
        let popArr = rainbow.pop().split(``);
        let i = popArr.shift().toLowerCase();
        let v = popArr.reverse().pop().toUpperCase();
        let a = popArr.pop();
        popArr.push(i, a, v);
        rainbow.splice(5, 1, popArr.reverse().join(``));
        break;

    case `Poltava`:
        rainbow.splice(3,1,`Gave`, `Battle`);
        break;
}

if (rainbow[3] !== `Gave`){
    let tempVain = rainbow.pop();
    rainbow.pop();
    rainbow.pop();
    rainbow.push(`Gave`, `Battle`, destination.reverse()[0], tempVain);
}

const colors = [`#f2453d`, `#fd9827`, `#feea4e`, `#8dc252`, `#1eabf1`, `#4154b3`, `#9b2fae`];

 document.write(`<div style="text-align:center">
  <span class="round" style="background-color: ${colors[0]}"></span>
  <span class="round" style="background-color: ${colors[1]}"></span>
  <span class="round" style="background-color: ${colors[2]}"></span>
  <span class="round" style="background-color: ${colors[3]}"></span>
  <span class="round" style="background-color: ${colors[4]}"></span>
  <span class="round" style="background-color: ${colors[5]}"></span>
  <span class="round" style="background-color: ${colors[6]}"></span>
</div>
<div style="text-align:center">
  <span class="text">${rainbow[0]}</span>
  <span class="text">${rainbow[1]}</span>
  <span class="text">${rainbow[2]}</span>
  <span class="text">${rainbow[3]}</span>
  <span class="text">${rainbow[4]}</span>
  <span class="text">${rainbow[5]}</span>
  <span class="text">${rainbow[6]}</span>
</div>`);