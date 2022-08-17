const products = [
    ['apple',10],
    ['banana',8],
    ['mango',20],
    ['grape',18]
]

const getPrice = (products, seasonFunc) => {
    products = JSON.parse(JSON.stringify(products));
    let sum = 0;
    for (let i = 0; i < products.length;i++) {
        sum += typeof seasonFunc === `function`
            ? seasonFunc(products[i][1])
            : products[i][1];
    }
    return sum;
}

const summerValue = value => value*0.8;

const winterValue = value => value*2;

console.log(getPrice(products, summerValue));

console.log(getPrice(products, winterValue));

console.log(getPrice(products));