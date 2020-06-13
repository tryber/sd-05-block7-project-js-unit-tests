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
// const vetor = [1, 2, 3, 4, 5];
let media = 0;
let contador = 0;
const average = (array) => {
  function isArray(myArray) {
    return (myArray.constructor === Array);
  }
  for (cont = 0; cont < array.length; cont += 1) {
    if (isArray(array) && (array.length !== 0) && (typeof array[cont] === 'number')) {
      media += Math.round(array[cont]);
      contador += 1;
    }
    else { return undefined; }
  }
  return (media / contador);
};
module.exports = average;
