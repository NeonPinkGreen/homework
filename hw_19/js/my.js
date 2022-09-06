const block = document.querySelector(`div`);

const setCenterPosition = () => {
    block.style.left = (document.body.clientWidth - block.offsetWidth) / 2 + `px`;
    block.style.top = (document.body.clientHeight - block.offsetHeight) / 2 + `px`;
}
setCenterPosition();

// const movingBlock = event => {
//     let currentBlockLeft = parseInt(block.style.left),
//         currentBlockTop = parseInt(block.style.top);
//
//     block.style.left = currentBlockLeft + 10 + `px`;
//     block.style.top = currentBlockTop + 10 + `px`;
//
//     document.removeEventListener(`mouseup`, movingBlock);
// };

const movingRight = block => {
    block.style.left = parseInt(block.style.left) + 10 + `px`;
}

const movingLeft = block => {
    block.style.left = parseInt(block.style.left) - 10 + `px`;
}

const movingUp = block => {
    block.style.top = parseInt(block.style.top) - 10 + `px`;
}

const movingDown = block => {
    block.style.top = parseInt(block.style.top) + 10 + `px`;
}


const EVENTS = {
    37: block => movingLeft(block),
    38: block => movingUp(block),
    39: block => movingRight(block),
    40: block => movingDown(block)
}

document.addEventListener(`keydown`, event => {
    EVENTS[event.keyCode](block);
})

// document.addEventListener(`keydown`, event => console.log(event));