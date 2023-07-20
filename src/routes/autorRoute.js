const express = require('express');
const autorController = require('../controllers/autorController');

const router = express.Router();


// Rutas para autores
router.get('/autores', autorController.getAllAutores);
router.get('/autores/:id', autorController.getAutorById);
router.post('/autores', autorController.createAutor);
router.put('/autores/:id', autorController.updateAutor);
router.delete('/autores/:id', autorController.deleteAutor);

  
module.exports = router;