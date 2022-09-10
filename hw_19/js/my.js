const block = document.querySelector(`div`);

const setCenterPosition = () => {
    block.style.left = (document.body.clientWidth - block.offsetWidth) / 2 + `px`;
    block.style.top = (document.body.clientHeight - block.offsetHeight) / 2 + `px`;
}
setCenterPosition();

const movingRight = block => {
    block.style.left = parseInt(block.style.left) + 10 + `px`;
    block.style.transition = `0.1s`;
}

const movingLeft = block => {
    block.style.left = parseInt(block.style.left) - 10 + `px`;
    block.style.transition = `0.1s`;
}

const movingUp = block => {
    block.style.top = parseInt(block.style.top) - 10 + `px`;
    block.style.transition = `0.1s`;
}

const movingDown = block => {
    block.style.top = parseInt(block.style.top) + 10 + `px`;
    block.style.transition = `0.1s`;
}

const bounceOut = (direction) => {
    switch (direction){
        case `right`: block.style.left = parseInt(block.style.left) - 20 + `px`;
        block.style.transition = `0.8s`;
        break;

        case `left`: block.style.left = parseInt(block.style.left) + 20 + `px`;
        block.style.transition = `0.8s`;
        break;

        case `top`: block.style.top = parseInt(block.style.top) + 20 + `px`;
        block.style.transition = `0.8s`;
        break;

        case `bottom`: block.style.top = parseInt(block.style.top) - 20 + `px`;
        block.style.transition = `0.8s`;
        break;
    }

}

const checkObstacle = (block) => {
    let obstacleWidth = parseInt(block.style.left) + block.offsetWidth;
    let obstacleHeight = parseInt(block.style.top) + block.offsetHeight;
    (document.body.clientWidth < obstacleWidth) ? bounceOut(`right`) : `false`;
    (parseInt(block.style.left) < 0) ? bounceOut(`left`) : `false`;
    (document.body.clientHeight < obstacleHeight) ? bounceOut(`bottom`) : `false`;
    (parseInt(block.style.top) < 0) ? bounceOut(`top`) : `false`;

}

const EVENTS = {
    37: block => movingLeft(block),
    38: block => movingUp(block),
    39: block => movingRight(block),
    40: block => movingDown(block)
}

document.addEventListener(`keydown`, event => {
    EVENTS[event.keyCode](block);
    checkObstacle(block);
})

