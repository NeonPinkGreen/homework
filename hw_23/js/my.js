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

const generateSelect = async () => {
  let data = await controller(API + `/universes`);
  selectComics.innerHTML = data
      .map(item => `<option value="${item.name}">${item.name}</option>`)
      .join(``);
};

const renderHero = heroObject => {
  let tr = document.createElement(`tr`);
  let td = document.createElement()
  let tbody = document.querySelector(`table tbody`);
  tbody.append(tr);
}

const renderHeroes = async () => {
  let heroes = await controller(API+`/heroes`);
  heroes.forEach(hero => renderHero(hero));
};



const generateTable = async () => {
  let tBody = table.createTBody();
  let data = await controller(API + `/heroes`);

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

generateSelect().then();
generateTable().then();
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
    favourite: favourite.checked,
  };

  let heroes = await controller(API + `/heroes`);
  let heroExist = heroes.find(item => item.name === postObject.name);

  if (!heroExist) {
    let addedHero = await controller(API + `/heroes`, `POST`, postObject);
    renderHero(addedHero);
  } else {
    console.log(`користувач з таким ім'ям вже є в базі`);
  }
});
