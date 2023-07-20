const express = require('express')
const libroController = require('../controllers/libroController')

const router = express.Router();

// Rutas para libros
router.get('/libros', libroController.getAllLibros);
router.get('/libros/:id', libroController.getLibroById);
router.post('/libros', libroController.createLibro);
router.put('/libros/:id', libroController.updateLibro);
router.delete('/libros/:id', libroController.deleteLibro);


module.exports = router;