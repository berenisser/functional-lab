'use strict';

//Como la funcion ahora recibe el parametro discount, ignora esta variable
const discount = .2;

// Broken: returns new array but mutates same object references.
const applyDiscount = (cart,discount) => {
  //shift remueve y altera el length original del arreglo asi que copiamos el arreglo
  const carrito = cart.map(el => Object.assign({}, el));
  if (!carrito.length) {
    return [];
  }

  //const carrito = [...cart];

  const current = carrito.shift();
  current.price *= (1 - discount);
  return [current].concat(applyDiscount(carrito,discount));
};

module.exports = applyDiscount;