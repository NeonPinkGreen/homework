const block = document.querySelector(`div`);

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getRandomColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

const getMaxLeft = () => {

return document.body.clientWidth - block.offsetWidth;
}
const getMaxTop = () => {
    return document.body.clientHeight - block.offsetHeight;

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
