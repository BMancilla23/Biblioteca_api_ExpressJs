const { Autor, Libro } = require('../models/index');
const autorDto = require('../dto/autorDto');

module.exports = {
  async getAllAutores() {
    const autores = await Autor.findAll({ include: [{ model: Libro, as: 'libros' }] });
    return autores.map(autor => autorDto.toDto(autor));
  },

  async getAutorById(id) {
    const autor = await Autor.findByPk(id, { include: [{ model: Libro, as: 'libros' }] });
    if (!autor) {
      throw new Error('Autor no encontrado');
    }
    return autorDto.toDto(autor);
  },

  async createAutor(autorData) {
    // Realiza algunas validaciones antes de guardar el autor
    if (!autorData.nombre || !autorData.apellido) {
      throw new Error('Campos incompletos: nombre y apellido son obligatorios');
    }

    // Si las validaciones son exitosas, crea el autor
    const autor = await Autor.create(autorData);
    return autorDto.toDto(autor);
  },

  async updateAutor(id, autorData) {
    const autor = await Autor.findByPk(id);
    if (!autor) {
      throw new Error('Autor no encontrado');
    }
    await autor.update(autorData);
    return autorDto.toDto(autor);
  },

  async deleteAutor(id) {
    const autor = await Autor.findByPk(id);
    if (!autor) {
      throw new Error('Autor no encontrado');
    }
    await autor.destroy();
    return autorDto.toDto(autor);
  }
};