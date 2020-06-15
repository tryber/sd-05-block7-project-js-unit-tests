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
  add: (num1, num2) => (Number.isInteger(num1) && Number.isInteger(num2)) ? num1 + num2 : 'Número informado não é inteiro',
  mult: (num1, num2) => (Number.isInteger(num1) && Number.isInteger(num2)) ? num1 * num2 : 'Número informado não é inteiro',
  div: (num1, num2) => (Number.isInteger(num1) && Number.isInteger(num2)) ? Math.floor(num1 / num2) : 'Número informado não é inteiro',
  sub: (num1, num2) => (Number.isInteger(num1) && Number.isInteger(num2)) ? num1 - num2 : 'Número informado não é inteiro',
};

module.exports = calculator;
