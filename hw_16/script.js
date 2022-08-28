const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}

class Coffee{
    constructor(coffee){
        Object.assign(this, coffee);
    }
    makeCoffee() {
        return `<div class="cup">
                    <div class="coffee">
                         ${this.ingredients ? this.getIngredients() : ``}
                    </div>
                  <p class="coffee__title">${this.title}</p>
                </div>`
}

    getIngredients(){
        const ingredientsRender = [];
        for (let key in this.ingredients){
            let ingredient = key.split(' ').join('__');
            ingredientsRender
                .push(`<p style="height: ${this.ingredients[key]}%" class="ingredient ${ingredient}">${key}</p>`);
        }

        return `<div class="coffee__ingredients">${ingredientsRender.join(``)}</div>`;
    }
}

class Espresso extends Coffee{
    constructor(coffee) {
        super(coffee);
    }
    makeCoffee() {
        return `<div class="cup">
            <div class="coffee coffee--espresso">
                    ${this.ingredients ? this.getIngredients() : ``}
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`;
    }

}

class EspressoMilk extends Coffee{
    constructor(coffee) {
        super(coffee);
    }
    makeCoffee() {
        return `<div class="cup">
            <div class="coffee coffee--espressoMilk">
                    ${this.ingredients ? this.getIngredients() : ``}
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`;
    }
}

class Alcoholic extends Coffee{
    constructor(coffee) {
        super(coffee);
    }
    makeCoffee() {
        return `<div class="cup">
            <div class="coffee coffee--alcoholic">
                    ${this.ingredients ? this.getIngredients() : ``}
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`;
    }
}

class Dessert extends Coffee{
    constructor(coffee) {
        super(coffee);
    }
    makeCoffee() {
        return `<div class="cup">
            <div class="coffee coffee--dessert">
                    ${this.ingredients ? this.getIngredients() : ``}
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`;
    }
}

const COFFEE_CLASSES = {
    Ristretto: coffee => new Espresso(coffee),
    Espresso: coffee => new Espresso(coffee),
    Lungo: coffee => new Espresso(coffee),
    Americano: coffee => new Espresso(coffee),
    Macchiato: coffee => new EspressoMilk(coffee),
    "Flat White": coffee => new EspressoMilk(coffee),
    Cappuccino: coffee => new EspressoMilk(coffee),
    Latte: coffee => new EspressoMilk(coffee),
    Mocha: coffee => new EspressoMilk(coffee),
    "Irish Coffee": coffee => new Alcoholic(coffee),
    Corretto: coffee => new Alcoholic(coffee),
    "Baileys Hot Coffee": coffee => new Alcoholic(coffee),
    Affogato: coffee => new Dessert(coffee),
    Frappe: coffee => new Dessert(coffee),
    Glace: coffee => new Dessert(coffee)
}

let coffees = [];

for (let key in COFFEE_TYPES){
    let coffeeType = COFFEE_TYPES[key];

    for (let i in coffeeType){
        coffees.push(coffeeType[i]);
    }
}
let coffeeClass = coffees
    .map(coffee => COFFEE_CLASSES[coffee.title] ? COFFEE_CLASSES[coffee.title](coffee) : new Coffee(coffee))
    .map(coffee => coffee.makeCoffee())
    .join(``);

document.write(`<section class="cups">${coffeeClass}</section>`);