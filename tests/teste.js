
let restaurant = {};
const createMenu = (myMenu) => {
  restaurant = {
    fetchMenu: myMenu,
    consumption: [],
    order: (request) => {
      restaurant.consumption.push(request)},
  }; 
  return restaurant;
};

//order('coxinha');

const restaurante = createMenu({objetoQualquer: 'valor qualquer'});
restaurante.order('coxinha');
restaurante.order('teste');
console.log(restaurante);
//assert.strictEqual(createMenu({objetoQualquer: 'valor qualquer'}).consumption.includes('coxinha'), true);