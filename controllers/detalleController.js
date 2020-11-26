const { data } = require('../helpers/bd');

const detalleController = {
    detalle : (req, res) => {
 
        const heroe = data.find( heroe => heroe.id == req.params.id);
        
        if(heroe){
                                    const {nombre, profesion} = heroe;
            res.render('detalleHeroes', { 
                                                    nombre: nombre, 
                                            profesion: profesion,
                                                            error: null
                } );
        }
        else {
            res.render('detalleHeroes', { 
                                            error: "No se encontro ningun heroe", 
                                            profesion: null, 
                                            nombre:null 
                                        } );
        }
       
    }
}

module.exports = detalleController;