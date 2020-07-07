/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const retorno = productDetails('Alcool Gel', 'Máscara');
    assert.strictEqual(Array.isArray(retorno), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(retorno.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof retorno[0], 'object');
    assert.strictEqual(typeof retorno[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(retorno[0], retorno[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const p1 = (retorno) => {
      let n = '';
      let productId = retorno[0].details.productId;
      productId = productId.split('');
      for (let i = productId.length; i > productId.length -3; i -= 1) {
        n += productId[i - 1];
      }
      return (n);
    }
    const p2 = (retorno) => {
      let n = '';
      let productId = retorno[1].details.productId;
      productId = productId.split('');
      for (let i = productId.length; i > productId.length -3; i -= 1) {
        n += productId[i - 1];
      }
      return (n);
    }
    assert.deepStrictEqual(p1(retorno), '321');
    assert.deepStrictEqual(p2(retorno), '321');
  });
});
