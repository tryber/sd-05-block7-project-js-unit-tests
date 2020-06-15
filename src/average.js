const assert = require('assert');
/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  const length = array.length;
  if(!array.every((n) => Number.isInteger(n))) return undefined;
  const sum = array.reduce((total, n) => total + n);
  return Math.floor(sum/length);
};


assert.strictEqual(typeof(average), 'function');
assert.strictEqual(average([2, 2]), 2);
assert.strictEqual(average([1, 2]), 1);
assert.strictEqual(average([2, '2']), undefined);

module.exports = average;
