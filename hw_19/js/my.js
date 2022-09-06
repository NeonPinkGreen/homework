const block = document.querySelector(`div`);

const setCenterPosition = () => {
    block.style.left = (document.body.clientWidth - block.offsetWidth) / 2 + `px`;
    block.style.top = (document.body.clientHeight - block.offsetHeight) / 2 + `px`;
}
setCenterPosition();

block.addEventListener(`onkeydown`, event => {
    document.onkeydown = function(e) {
        switch (e.code) {
            case 37:
                block.style.left += 10 + `px`;
                break;
            case 38:
                block.style.top += 10 + `px`;
                break;
            case 39:
                block.style.left -= 10 + `px`;
                break;
            case 40:
                block.style.top -= 10 + `px`;
                break;
        }
    };
});