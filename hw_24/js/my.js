const API = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;

let $colors = $(`#colors`);
let $car = $(`#car`);

$.ajax({
    url: API,
    method: `GET`,
    dataType: "JSON",
    success: function(colors, car) {
        $.each(colors, function(i, color) {
            let $dot = `<span class="dot ${color.title}", style="background-color:${color.color}"></span>`;
            $colors.append($dot)
        })
        $.each(colors, function(i, colors){
            $(`span`).click(function (){
                $(`span`).attr(`src`, `https://mc-astro.github.io/tesla-roadster-colors/img/${color.img}.jpg`)
            })
        })
    },
    error: error => console.log(error)
});

// $(document).ready(function() {
//     $(`div`).on(`click`, `span`, function(){
//         $car.css("src", "https://mc-astro.github.io/tesla-roadster-colors/img/${img}.jpg")
//     })
// })

