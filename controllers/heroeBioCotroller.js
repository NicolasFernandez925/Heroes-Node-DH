const { data } = require('../helpers/bd');

const heroeBioController = {
    heroeBio: (req, res) => {
         
        const heroe = data.find( heroe => heroe.id == req.params.id);

        if( !(heroe) ){
            res.render('heroesBio', { error: 'No encontramos un héroe para mostrarte su biografía', resenia: null, nombre: null } );
        } 
        if( req.params.ok !== 'ok'){

            res.render('heroesBio', { error: 'Lamento que no desees saber más de mi :(', resenia: null, nombre: null } );
        } 
        else {
            const { resenia, nombre } = heroe;
            res.render('heroesBio', { resenia: resenia , nombre: nombre, error: null } );
        }      
    }
}
module.exports = heroeBioController;