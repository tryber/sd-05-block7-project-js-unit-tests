/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois numABs e retornar um numAB.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número numAB;
  - Um número numAB;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
    add: (numA, numAB) => Math.round(numA + numAB),
    mult: (numA, numAB) => Math.round(numA * numAB),
    div: (numA, numAB) => Math.floor(numA / numAB),
    sub: (numA, numAB) => Math.round(numA - numAB),
};

module.exports = calculator;
