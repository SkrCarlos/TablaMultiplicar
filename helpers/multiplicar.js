const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base = 5, listar, hasta) => {

    try {

        let salida = '';
        let consola = '';

        consola += '=====================\n'.red;
        consola += `    Tabla del: ${ color.green(base) }\n`.red;
        consola += '=====================\n'.red;

        salida += '=====================\n';
        salida += `    Tabla del: ${ base }\n`;
        salida += '=====================\n';

        for( let i = 1; i <= hasta; i++){
            consola += `    ${ base } ${ 'x'.green } ${i} ${ '='.green } ${ base * i }\n`;
            salida  += `    ${ base } x ${i} = ${ base * i }\n`;
        }

        if (listar) {
            console.log(consola);
        }
        
        fs.writeFileSync(`./tablas/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt creado`;

    } catch (err) {
        throw err;
    }

} 

module.exports = {
    crearArchivo
};