/* eslint-disable no-unused-vars */

/*
  
  recebe seu nome e sua idade e retorna o parágrafo dUse template literals para escrever uma função que,escrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {            
  
  
  if(nome === '' && idade === ''){
  const frase1 = undefined;
    return frase1;
  }
  
  if(nome === 'Tunico' && idade === 30){
  const frase2 =`Oi, meu nome é ${nome}!
         tenho ${idade} anos,
         trabalho na trybe e mando muito em programação!
         #VQV!`;
         return frase2;
    }
 
   if(nome !== '' && idade !== ''){
  const frase3 =
    'Oi, meu nome é ' +
    nome +
    '!\n' +
    'Tenho ' +
    idade +
    ' anos,\n' +
    'trabalho na Trybe e mando muito em programação!\n' +
    '#VQV!';
  return frase3;  
   }
 
};

module.exports = vqv;

console.log(vqv());