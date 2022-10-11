const API = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;


let $colors = $(`#btnsContainer`);
let $car = $(`#carImg`);

const renderBtns = data => {
    $(data).each((index, item) => {
        let $dot = `<button class="btnColor ${item.title}", style="background-color:${item.color}"></button>`;
        $colors.append($dot);
    })

    $(data).each((index, item) => {
        $(`button`).on("click", function () {
            renderCar(item);
        })
    })
}

const renderCar = item => {
    $car.attr(`src`, `https://mc-astro.github.io/tesla-roadster-colors/img/${item.img}.jpg`);
}

$.ajax({
    url: API,
    method: `GET`,
    dataType: "JSON",
    success: data => {
        renderBtns(data);
        renderCar(data[0])
    },
    error: error => console.log(error)
})


//
// $.ajax({
//     url: API,
//     method: `GET`,
//     dataType: "JSON",
//     success: function(colors) {
//         $.each(colors, function(i, color) {
//             let $dot = `<button class="btnColor ${color.title}", style="background-color:${color.color}"></button>`;
//             $colors.append($dot)
//         })
//
//     },
//     error: error => console.log(error)
// });
//
// $.each($colors, function(i, colors) {
//     $(`#btnColor`).click(function () {
//         $car.attr(`src`, `https://mc-astro.github.io/tesla-roadster-colors/img/${color.img}.jpg`)
//     })
// })

// $(document).ready(function() {
//     $(`div`).on(`click`, `span`, function(){
//         $car.css("src", "https://mc-astro.github.io/tesla-roadster-colors/img/${img}.jpg")
//     })
// })

