import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularPotencia(base: number, exponente: number): number {
  if (exponente === 0) {
    return 1;
  } else {
    return base ** exponente;
  }
}

rl.question('Ingrese la base: ', (baseInput) => {
  const base = parseInt(baseInput);

  rl.question('Ingrese el exponente (mayor o igual a cero): ', (exponenteInput) => {
    const exponente = parseInt(exponenteInput);

    if (exponente < 0) {
      console.log('El exponente debe ser mayor o igual a cero.');
    } else {
      const resultado = calcularPotencia(base, exponente);
      console.log(`El resultado de ${base}^${exponente} es: ${resultado}`);
    }

    rl.close();
  });
});