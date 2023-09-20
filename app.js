//punto1 (micro desafio 2)
let leerDatos = require(__dirname + '/collectibles');

//punto2
const hotToys = leerDatos('figuras1')
const bandai = leerDatos('figuras2')
const starWars = leerDatos('figuras3')
//punto3
const unifiedCollectibles = [...hotToys, ...bandai, ...starWars]


const collectibles = {
    figuras: unifiedCollectibles, //punto4

    //punto5
    listFigures: function(){ //puntoA
        this.figuras.forEach(element => console.log(element));
    },
    figuresByBrand: function(brand){ //puntoB
       return this.figuras.filter((elemento) => elemento.marca === brand);
    },
    figuresByPriceAndBrand: function(precio, brand){
        figBrand = this.figuresByBrand(brand)
        return figBrand.filter((elemento) => elemento.precio >= precio);
    }
}
//puntoC
console.log(collectibles.listFigures());
console.log(collectibles.figuresByBrand('Star Wars'));
console.log(collectibles.figuresByPriceAndBrand(150, 'Bandai'));