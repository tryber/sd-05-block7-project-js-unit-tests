/* eslint-disable max-len */

/*
  Essa função recebe o raio de um círculo,
  retornando um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos! Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

const circle = (radius) => {
  const PI = 3.14;
  if (!radius) { return undefined; }
  return {
    radius,
    area: PI * radius * radius,
    circumference: 2 * PI * radius,
  };
};

module.exports = circle;

/*console.log(Object.keys(circle(100)).length);     
console.log(Object.keys({radius: 100, area: 3000, circunference: 600}).length);
console.log(['radius', 'area', 'circunference'].length);
console.log(3)*/

 console.log(circle(3));
// console.log(circle(undefined));

// [indice(0), indice(1)...] paulo[0]
// const paulo = {'chave1': 10, 'chave2': 20};
// paulo.chave1
// paulo['chave1']
// console.log(`Essas são as chaves ${Object.keys(paulo)} 
// esses são os valores ${Object.values(paulo)}`)
// Object.keys(paulo)
// Object.values(paulo)