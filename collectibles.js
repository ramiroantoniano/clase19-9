//punto 3 (micro desafio 1)
let fs = require('fs');

function leerDatos(ruta){ //figuras1.json O figuras2.json O figuras3.json
    const rutaArchivo = __dirname + '/datos/' + ruta + '.json';
    const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
    const arrayObjetos = JSON.parse(contenido);
    return arrayObjetos
}
//leerDatos('figuras1')
module.exports = leerDatos;