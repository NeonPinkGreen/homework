const userData = {
    USD: 1000,
    EUR: 900,
    UAH: 15000,
    BIF: 20000,
    AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

const getMoney = new Promise((resolve, reject) => {
    let request = confirm(`Подивитися баланс на карті?`);
    request ? resolve() : reject();
});

getMoney
    .then(
        function(){
            let userCur;
            do {
                userCur = prompt(`Введіть валюту:`);
            } while (!userData.hasOwnProperty(userCur));
            console.log(`Баланс становить: ${userData[`${userCur}`]} ${userCur}`);
        },

        function(){
            let userCur;
            do {
                userCur = prompt(`Введіть назву валюти, в якій ви бажаєте зняти кошти:`);
            } while (!userData.hasOwnProperty(userCur));
        }

    )