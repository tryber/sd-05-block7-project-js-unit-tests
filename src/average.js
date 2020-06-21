/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4.6 vira 5; 1.3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
function average(arr) {
  if (arr.length === 0) return undefined;
  let somaValores = 0;
  for (let posicao = 0; posicao < arr.length; posicao += 1) {
    if (typeof arr[posicao] !== 'number') return undefined;
    // se tipo do elemento na posicao do arr for diferente de numero ele retornará undefined.
    somaValores += arr[posicao];
    // somaValores = somaValores +arr[posicao];
    // (1) 0 + 4 (2) 4 + 2 (3) 6 + 8 (4) 14 + 10 
  }
  // quando o for acaba eu saio da chave, qual o valor guardado dentro de somaValores? = 24.
  return Math.round(somaValores / arr.length);
  // (24 / tamanho do array = 4) = (6)
  // math.round vai arredondar o numero decimal para um numero inteiro mais próximo.
};

console.log (average([4, 2, 8, 10]));
module.exports = average;

/* const averageFuncao = average
function average () {}

const average = () => {} //arrow function */
