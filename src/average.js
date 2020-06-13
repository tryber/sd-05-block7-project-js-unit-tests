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
let vetor = [''];
let media = 0;
let numeroArredondado;
//=========================================
const average = (array) => {
  let contador = 0;
//testa se a entrada é de fato um array e não um objeto.
  function isArray(myArray) {
    return myArray.constructor === Array;
  }
//==========================================
    if (array.length == 0){
      return undefined;
    } 
    else if(isArray(array)){ 
      for(let cont = 0; cont < array.length; cont++){
        if (typeof array[cont] === 'number'){
          media += Math.round(array[cont]);
          //console.log(media);
          contador++;
        } 
        else return undefined;
      }
      return (media/contador);
    } 
    else return undefined;
};
//console.log(average(vetor));
average(vetor)
module.exports = average;
