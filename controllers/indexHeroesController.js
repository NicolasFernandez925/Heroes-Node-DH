const { data } = require('../helpers/bd.js');

const indexController = {
    index : (req, res) =>  res.render('heroesIndex', { heroesJSON: data })
}
module.exports = indexController;