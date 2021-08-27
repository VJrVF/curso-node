
const fs = require('fs');
var colores = require('colors');

const crearArchivo = async(base = 5, listar = false, limite) => {
    
    try {
        let salida = '';
        let consola = '';
        
        if(base <= limite) {
            for(let i = 1; i <= 10; i++) {
                salida += `${base} x ${i} = ${base*i}\n`;
                consola += `${base} ${'x'.red} ${i} ${'='.green} ${base*i}\n`;
            }
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            if(listar) {
                console.log(consola);
                return `tabla del ${base} creado`;
            }

        }
        else { return console.log('La base excedió el límite')}
        //console.log(salida);
        //console.log(`tabla-${base}.txt ha sido creado`);
    }

    catch(err) {
        throw err;
    }  
}

module.exports = {
    crearArchivo
}