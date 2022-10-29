const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io`;

const controller = async (url, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }

    if(obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options),
        response = request.ok ? await request.json() : await Promise.reject();

    return response;
}

const generateTableHead = async (url, table) => {
    let thead = table.createTHead();
    let row = thead.insertRow();
    const response = await controller(url);
    let data = Object.keys(response[0]);

    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }

}

const generateTable = async (url, table) => {
    let tBody = table.createTBody();
    let data = await controller(url);
    for (let element of data) {
        let row = tBody.insertRow();
        for (let key in element) {
            if (key === `favourite`){
                let cell = row.insertCell();
                let checkbox = document.createElement("input");
                checkbox.type = 'checkbox';
                checkbox.checked = element[key];
                cell.appendChild(checkbox);
            } else {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }

        }
    }
}

let table = document.querySelector(`table`);

generateTable(API+`/heroes`, table);
generateTableHead(API+`/heroes`, table);

