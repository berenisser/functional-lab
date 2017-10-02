const parseItems = (items) => {
   const cosas = [...items];  
  //En teoria la funcion map con el parametro de str deberia solucionar el 
  //conflicto que retorna [1, NaN, NaN] en vez de un arreglo de integers
  //cosas.map(str => parseInt(str) );
  for (let i = 0; i < cosas.length; i++) {
 		cosas[i] = parseInt(cosas[i]);
 	}
  return cosas.sort();
};

module.exports = parseItems;