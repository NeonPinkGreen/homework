const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}

const convert = inputObj => {
    
    let result = {};
     for (let key in inputObj) {

          if ((typeof inputObj[key]) === `object` && !Array.isArray(inputObj[key])){
              const nest = convert(inputObj[key]);
              for (let n in nest){
              result[n] = nest[n];
              }

          } else {
              result[key] = inputObj[key];
          }
     }
     return result;
}

const newObj = convert(obj);

console.log(newObj);