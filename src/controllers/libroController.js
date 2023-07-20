const libroService = require('../services/libroService');

module.exports = {
    async getAllLibros(req, res) {
      try {
        const libros = await libroService.getAllLibros();
        res.json(libros);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  
    async getLibroById(req, res) {
      try {
        const id = req.params.id;
        const libro = await libroService.getLibroById(id);
        res.json(libro);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    },
  
    async createLibro(req, res) {
      try {
        const libroData = req.body;
        const libro = await libroService.createLibro(libroData);
        res.status(201).json(libro);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },
  
    async updateLibro(req, res) {
      try {
        const id = req.params.id;
        const libroData = req.body;
        const libro = await libroService.updateLibro(id, libroData);
        res.json(libro);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    },
  
    async deleteLibro(req, res) {
      try {
        const id = req.params.id;
        const libro = await libroService.deleteLibro(id);
        res.json(libro);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  };