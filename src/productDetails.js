/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/

const productDetails = (firstProduct, secondProduct) => {
  const output = [];
  output.push({
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  });
  output.push({
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  });
  return output;
};

//  console.log(typeof productDetails('Alcool gel', 'Máscara'));
//  console.log(productDetails('Alcool gel', 'Máscara'));

module.exports = productDetails;
