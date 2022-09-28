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

            let amount;

            do {
                userCur = prompt(`Введіть назву валюти, в якій ви бажаєте зняти кошти:`);
            } while ((!bankData.hasOwnProperty(userCur)) || (!userData.hasOwnProperty(userCur)));

            let cashAvailable = bankData[userCur].max > userData[userCur];

            amount = prompt(`Введіть сумму зняття:`);

            if ((amount > bankData[userCur].max) || (amount > userData[userCur])){
                console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${cashAvailable ? userData[userCur] : bankData[userCur].max} ${userCur}`);
            } else if ((amount < bankData[userCur].min)){
                console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${bankData[userCur].min} ${userCur}`);
            } else {
                console.log(`От Ваші гроші ${amount} ${userCur} ${bankData[userCur].img}`);
            }

        }
    ).then(
        function (){
            console.log('Дякую, гарного дня 😊');

        }
)