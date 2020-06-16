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

// const average = () => {};
const average = (array) => {
// Verifica se o array ta vazio
  if (array.length === 0) return undefined;
  let auxSoma = 0;
// Laço for para somar os valores do array
  for (let i = 0; i < array.length; i += 1) {
// Se o valor da lista não for um número retorna indefinido
    if (typeof array[i] !== 'number') {
      return undefined;
    }
    auxSoma += array[i]; // Faz a soma de todos os itens do array
  }
// Função math.round arredonda o valor da divisão da média para valor inteiro
  return Math.round(auxSoma / array.length);
};
module.exports = average;
