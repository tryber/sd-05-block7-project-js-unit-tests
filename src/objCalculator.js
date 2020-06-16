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

const numbers = require("./numbers");

const calculator = {
  add: (int1, int2) => {
    if (Number.isInteger(int1) && Number.isInteger(int2)) {
    const add = int1 + int2;
    return add;
    } else {
    alert('Precisa ser número inteiro')
    }
  },
  mult:(int1, int2) => {
    if (Number.isInteger(int1) && Number.isInteger(int2)) {
    const mult = int1 * int2;
    return mult;
    } else {
    alert('Precisa ser número inteiro')
    }
  },
  div:(int1, int2) => {
    if (Number.isInteger(int1) && Number.isInteger(int2)) {
    const div = Math.floor(int1 / int2);
    return div;
    } else {
    alert('Precisa ser número inteiro')
    }
  },
  sub:(int1, int2) => {
    if (Number.isInteger(int1) && Number.isInteger(int2)) {
    const sub = int1 - int2;
    return sub;
    } else {
    alert('Precisa ser número inteiro')
    }
  },
};

module.exports = calculator;
