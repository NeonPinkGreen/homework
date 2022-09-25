const API = `https://api.chucknorris.io/jokes`;

const jokesCategories = document.querySelector("#jokesCategories");
const jokesList = document.querySelector("#jokesList");

const getData = url => fetch(url)
    .then(data => data.ok ? data.json() : Promise.catch(data.statusText))
    .catch(err => console.log(`In catch: ${err}`));

const selectCats = () => {
    getData(API+`/categories`)
        .then(cats => {
            jokesCategories.innerHTML = cats
                    .map((cat) => `<option value="${cat}">
                        ${cat}
                </option>`)
                    .join(``);
            }
        );
}

selectCats();

jokesCategories.addEventListener(`change`,
    () => {
        getData(API + `/random?category=${jokesCategories.value}`)
            .then(data => {
                document
                    .querySelector(`option[value="${jokesCategories.value}"]`)
                    .setAttribute(`disabled`, true);

                const li = document.createElement(`li`);
                li.innerHTML = `<p>Category: <b>${data.categories[0]}</b></p>
                            <p>${data.value}</p>`;

                const removeBtn = document.createElement(`button`);
                removeBtn.innerHTML = `Remove joke`;
                removeBtn.addEventListener(`click`, () => {
                    li.remove();
                    document
                        .querySelector(`option[value="${jokesCategories.value}"]`)
                        .removeAttribute(`disabled`);
                });

                li.append(removeBtn);

                jokesList.append(li);
            })
    .catch(err => console.log(err));

    });