const products = [
    ['apple',10],
    ['banana',8],
    ['mango',20],
    ['grape',18]
]

const getPrice = (products, seasonFunc) => {
    const copiedProducts = [...products];
    let sum = 0;

    if (seasonFunc) {
        switch(seasonFunc){
            case 'summerValue':
                for (let i = 0; i < copiedProducts.length; i++) {
                    summerValue(copiedProducts[i][1]);
                }
                return sum;

            case 'winterValue':
                for (let i = 0; i < copiedProducts.length; i++) {
                    winterValue(copiedProducts[i][1]);
                    sum += copiedProducts[i][1];
                }
                return sum;
        }
    } else {
        for (let i = 0; i < copiedProducts.length; i++) {
            sum += copiedProducts[i][1];
        }   return sum;

    }
}

function summerValue(value){
    return value*0.8;
}

function winterValue(value){
    return value*2;
}

console.log(getPrice(products, summerValue));

console.log(getPrice(products, winterValue));

console.log(getPrice(products));