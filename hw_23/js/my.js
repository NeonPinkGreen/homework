const API = `https://63693f7228cd16bba71904e4.mockapi.io/`;
const inputName = document.querySelector("#name");
const selectComics = document.querySelector("#comics");
const favourite = document.querySelector("#favourite");

const form = document.querySelector(`#form`);
const controller = async (url, method = `GET`, obj) => {
  let options = {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  };

  if (obj) options.body = JSON.stringify(obj);

  let request = await fetch(url, options),
    response = request.ok ? await request.json() : await Promise.reject();

  return response;
};

const generateTableHead = async (url, table) => {
  let thead = table.createTHead();
  let row = thead.insertRow();
  const response = await controller(url);
  let data = Object.keys(response[0]);
  data.push(`action`);

  for (let key of data) {
    if (key === `id`) {
    } else {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
};
const generateSelect = async (url, selectComics) => {
  let data = await controller(url);

  for (let element of data) {
    for (let key in element) {
      if (key === `name`) {
        let option = document.createElement("option");
        option.value = element[key];
        option.innerText = element[key];
        selectComics.appendChild(option);
      }
    }
  }
};

const generateTable = async (url, table) => {
  let tBody = table.createTBody();
  let data = await controller(url);

  for (let element of data) {
    let row = tBody.insertRow();
    for (let key in element) {
      if (key === `favourite`) {
        let cell = row.insertCell();
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `checkbox`;
        checkbox.checked = element[key];
        checkbox.addEventListener("change", function () {
          if (this.checked) {
            element[key] = true;
            controller(API + `/heroes/` + element.id, `PUT`, element);
          } else {
            element[key] = false;
            controller(API + `/heroes/` + element.id, `PUT`, element);
          }
        });
        cell.appendChild(checkbox);
      } else if (key === `id`) {
      } else {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
    let cell = row.insertCell();
    let button = document.createElement("button");
    button.innerHTML = `Delete`;
    button.id = element.id;
    button.addEventListener("click", () => deleteHero(button));
    cell.appendChild(button);
  }
};

let table = document.querySelector(`table`);

generateSelect(API + `/universes`, selectComics).then();
generateTable(API + `/heroes`, table).then();
generateTableHead(API + `/heroes`, table).then();

let actionColumn = document.createElement(`thead`);
table.append(actionColumn);

const deleteHero = (button) => {
  fetch(API + "/heroes/" + button.id, {
    method: "DELETE",
  })
    .then((res) => res.text())
    .then((res) => location.reload());
};

form.addEventListener(`submit`, async (event) => {
  event.preventDefault();
  const postObject = {
    name: inputName.value,
    comics: selectComics.value,
    favourite: Boolean(favourite.value),
  };

  let match = 1;
  let data = await controller(API + `/heroes`);
  for (let element of data) {
    for (let key in element) {
      if (element[key] === inputName.value) {
        match = 0;
      }
    }
  }

  if (match) {
    controller(API + `/heroes`, `POST`, postObject).then(() => {
      location.reload();
    });
  } else {
    console.log(`користувач з таким ім'ям вже є в базі`);
  }
});
