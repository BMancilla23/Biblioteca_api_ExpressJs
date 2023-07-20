const autorService = require('../services/autorService');

module.exports = {
    async getAllAutores(req, res) {
      try {
        const autores = await autorService.getAllAutores();
        res.json(autores);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  
    async getAutorById(req, res) {
      try {
        const id = req.params.id;
        const autor = await autorService.getAutorById(id);
        res.json(autor);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    },
  
    async createAutor(req, res) {
      try {
        const autorData = req.body;
        const autor = await autorService.createAutor(autorData);
        res.status(201).json(autor);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },
  
    async updateAutor(req, res) {
      try {
        const id = req.params.id;
        const autorData = req.body;
        const autor = await autorService.updateAutor(id, autorData);
        res.json(autor);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    },
  
    async deleteAutor(req, res) {
      try {
        const id = req.params.id;
        const autor = await autorService.deleteAutor(id);
        res.json(autor);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  };