const { crearArchivo } = require('./helpers/multiplicar');
const argvvv = require('./config/yargs');

console.clear();
console.log( argvvv);
console.log( 'base : yargs ',argvvv.base);

const base = argvvv.base;
const listar = argvvv.listar;
//const colors = argvvv.colors;
const limite = argvvv.li;

crearArchivo(base, listar, limite)
           .then(nameArchivo => {console.log(nameArchivo);})
           .catch(err => console.log(err));