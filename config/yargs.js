const argv = require('yargs')
              .option('b', {
                  alias : 'base',
                  type : 'number',
                  demandOption : true,
                  describe: 'Es la base de la tabla de multiplicar'
              })
              .option('l', {
                alias : 'listar',
                type : 'boolean',
                demandOption : true,
                default : false,
                describe: 'Muestra la lista de la tabla de multiplicar'
              })
              .option('li', {
                alias : 'limite',
                type : 'number',
                demandOption : true,
                describe: 'Muestra el limite'
              })
              .check((argv, options) => {
                  if( isNaN(argv.b)) {
                      throw 'La base tiene que ser un número';
                  }
                  return true;

              })
              .argv;

module.exports = argv;