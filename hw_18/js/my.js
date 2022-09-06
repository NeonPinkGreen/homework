const body = document.querySelector(`body`);
const block = document.querySelector(`div`);

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getRandomColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

const getMaxLeft = () => {
    return document.body.clientWidth - 100;
}

const getMaxTop = () => {
    return document.body.clientHeight - 100;
}

const setBgColor = (color) => {
    block.style.background = color;
}

const setPosition = () => {
    block.style.left = getRandomInt(getMaxLeft()) + `px`;
    block.style.top = getRandomInt(getMaxTop()) + `px`;
}

setInterval( () => {
    setBgColor(getRandomColor());
}, 500);

setInterval(() => {
    setPosition();
}, 1000)
