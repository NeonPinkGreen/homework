let burger;
let total = 0;

do{
    burger = prompt(`Choose hamburger or cheeseburger`, `cheeseburger`);
    if(burger) burger = burger.replaceAll(` `, ``).toLowerCase();
} while(!burger || (burger !== `hamburger` && burger !== `cheeseburger`));

switch (burger){
    case "hamburger":
        total += 10;
        break;

    case "cheeseburger":
        total += 15;
        let doubleCheese = confirm(`Would you like to add double cheese?`);
        if(doubleCheese) total += 5;
        break;
}

let potatoes = confirm(`Would you like potato?`);
let potatoSize;
if (potatoes){
    potatoSize = prompt(`Choose potato size: small/middle/big`);

if (potatoSize) potatoSize = potatoSize.replaceAll(` `, ``).toLowerCase();

    switch (potatoSize){
        case `middle`:
            total += 15;
            break;

        case `big`:
            total += 20;
            break;

        default:
            potatoSize = `small`;
            total += 10;
            break;
    }

}

let sauce = confirm(`Would you like sauce?`);
let sauceType
if (sauce){
    sauceType = prompt(`Choose sauce: ketchup or mayonnaise`);

    if (sauceType) sauceType = sauceType.replaceAll(` `, ``).toLowerCase();

    switch (sauceType){
        case `mayonnaise`:
            total += 3;
            break;

        default:
            sauceType = `ketchup`;
            total += 2;
            break;
    }

}

document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${burger} </li>
		${potatoes ? `<li>Potato 🍟: ${potatoSize} </li>` : ``}
		${sauce ? `<li>Sauce 🧂: ${sauceType} </li>` : ``}
	</ul>

	<p>Price: $${total} </p>
`);