function x(){
    const x = 1 + 1;
    const z = x + 3;
    const y = 1 - 2;
    const p = 1 * 3;
    return true;
}

function map(f, a) {
    let result = []; // Crea un nuevo arreglo
    let i; // Declara una variable
    for (i = 0; i != a.length; i++) result[i] = f(a[i]);
    return result;
  }
  const f = function (x) {
    return x * x * x;
  };
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f, numbers);
  console.log(cube);

function calculate(in_data) {
    const result = in_data * 0.17;
    return result;
}

function x() {
    const a =  2+2;
    return a
}


function abc() {
    return true;
}