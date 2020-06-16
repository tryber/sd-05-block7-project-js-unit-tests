/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (int1, int2) => {
    if (Number.isInteger(int1) === false || Number.isInteger(int2) === false) {
      return undefined;
    }
    const add = int1 + int2;
    return add;
  },
  mult: (int1, int2) => {
    if (Number.isInteger(int1) === false || Number.isInteger(int2) === false) {
      return undefined;
    }
    const mult = int1 * int2;
    return mult;
  },
  div: (int1, int2) => {
    if (Number.isInteger(int1) === false || Number.isInteger(int2) === false) {
      return undefined;
    }
    const div = Math.floor(int1 / int2);
    return div;
  },
  sub: (int1, int2) => {
    if (Number.isInteger(int1) === false || Number.isInteger(int2) === false) {
      return undefined;
    }
    const sub = int1 - int2;
    return sub;
  },
};

module.exports = calculator;
