/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois numBs e retornar um numB.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número numB;
  - Um número numB;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (numA, numB) => Math.round(numA + numB),
  mult: (numA, numB) => Math.round(numA * numB),
  div: (numA, numB) => Math.floor(numA / numB),
  sub: (numA, numB) => Math.round(numA - numB),
};

module.exports = calculator;
