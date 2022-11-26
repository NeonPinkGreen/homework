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

const generateSelect = async () => {
  let data = await controller(API + `/universes`);
  selectComics.innerHTML = data
      .map(item => `<option value="${item.name}">${item.name}</option>`)
      .join(``);
};

const renderHero = heroObject => {
  let tr = document.createElement(`tr`);
  tr.innerHTML = `<td>${heroObject.name}</td>
  <td>${heroObject.comics}</td>`;

  const tdFav = document.createElement(`td`);
  const inputFav = document.createElement(`input`);
  inputFav.type = `checkbox`;
  inputFav.checked = heroObject.favourite;
  inputFav.addEventListener(`change`, async e => {
    await controller(API+`/heroes/${heroObject.id}`, `PUT`, {favourite: e.target.checked});
  })

  tdFav.append(inputFav);

  const tdDel = document.createElement(`td`);
  const btnDel = document.createElement(`button`);
  btnDel.innerHTML = `Remove`;
  btnDel.addEventListener(`click`, async e => {
    await controller(API+`/heroes/${heroObject.id}`, `DELETE`);
    tr.remove();
  })

  tdDel.append(btnDel);

  tr.append(tdFav, tdDel);

  let tbody = document.querySelector(`table#heroes tbody`);
  tbody.append(tr);
}

const renderHeroes = async () => {
  let heroes = await controller(API+`/heroes`);
  heroes.forEach(hero => renderHero(hero));
};



const generateTable = async () => {
  const table = document.createElement(`table`);
  table.id = `heroes`;
  table.innerHTML = `<thead>
      <tr>
        <th>Name</th>
        <th>Comics</th>
        <th>Favourite</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody></tbody>`;

  document.body.append(table);
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

generateSelect().then();
generateTable().then();
renderHeroes().then();