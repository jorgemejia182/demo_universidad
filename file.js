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