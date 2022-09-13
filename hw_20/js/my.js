const settingsForm = document.querySelector(`#settingsForm`);
const element = document.querySelector(`#element`);
const elementColor = document.querySelector(`#elementColor`);
const figure = document.querySelector(`#figure`);

settingsForm.addEventListener(`submit`, e =>{
    e.preventDefault();
    element.classList.add(`${figure.value}`);
    element.style.background = elementColor.value;
})