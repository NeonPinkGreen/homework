const API = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;


let $colors = $(`#btnsContainer`);
let $car = $(`#carImg`);

const renderBtns = data => {
    $(data).each((index, item) => {
        let $dot = $(`<button class="btnColor" style="background-color:${item.color}"></button>`);
        $($dot).on("click", function () {
            renderCar(item);
            renderTitle(item);
        })
        $colors.append($dot);
    })

}

const renderCar = item => {
    $car.attr(`src`, `https://mc-astro.github.io/tesla-roadster-colors/img/${item.img}.jpg`);
}

const renderTitle = item => {
    $(`#carTitle`).text(item.title);
}

$.ajax({
    url: API,
    method: `GET`,
    dataType: "JSON",
    success: data => {
        renderBtns(data);
        renderCar(data[0]);
        renderTitle(data[0])
    },
    error: error => console.log(error)
})