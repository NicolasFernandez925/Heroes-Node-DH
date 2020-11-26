const express = require('express');
const router = express.Router();

//controllers
const indexHeroesController = require('../controllers/indexHeroesController');
const detalleController = require('../controllers/detalleController');
const heroeBioController = require('../controllers/heroeBioCotroller');

router.get('/', indexHeroesController.index);

router.get('/detalle/:id', detalleController.detalle);

router.get('/bio/:id/:ok?', heroeBioController.heroeBio);

module.exports = router;
