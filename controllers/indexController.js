
const indexController =  {
    index: (req, res) => {
        res.render('index', {msg: 'Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan comoinspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.'})
    } 

}

module.exports = indexController;