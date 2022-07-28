let arrSize;
const arr = [];

do{arrSize = prompt(`Type the size of the array between 2 and 10:`);
} while (!arrSize || isNaN(arrSize) || arrSize < 2 || arrSize > 10);

if (arrSize < 0) arrSize = Math.abs(arrSize);

if (arrSize % 1 !== 0) arrSize = Math.round(arrSize);

arr.length = arrSize;

console.log(arr.length);

let multiplied = 1;

for (let i = 0; i < arr.length; i++){
    arr[i] = Math.round(Math.random()*10);
    multiplied *= arr[i];
}
console.log(arr);
console.log(multiplied);

