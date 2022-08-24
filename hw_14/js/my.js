const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();

class Vegetable{
    constructor(product) {
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;

        Object.assign(this, product);
    }

    getPrice() {
     return this.season ? this.price*this.seasonKoef : this.price;
    }

    getInfo(){
        let keys = Object.keys(this)
            .map(key => {
                if (key===`price`)
                    this[key] = this.getPrice(this[key]);

                    return key;
            })
            .map(key => `${capitalize(key)}: ${this[key]}`)
            .join(`. `);

        return keys;
    }
}

let LIs = vegetables
    .map(product => new Vegetable(product))
    .map(product => `<li>${product.getInfo()}</li>`)
    .join(``);

document.write(`<ul>${LIs}</ul>`);