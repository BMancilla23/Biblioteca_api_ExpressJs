const {Libro, Autor} = require('../models/index');
const libroDto = require('../dto/libroDto');

module.exports = {
    async getAllLibros(){
        const libros = await Libro.findAll({include: [{model: Autor, as: 'autor'}]})
        return libros.map(libro => libroDto.toDto(libro));
    },

    async getLibroById(id){
        const libro = await Libro.findByPk(id, {include: [{model:Autor, as: 'autor'}]})
        if (!libro) {
            throw new Error('Libro no encontrado')
        }
        return libroDto.toDto(libro);
    },
    async createLibro(libroDto){
        // Realiza algunas validaciones antes de guardar el libro
    if (!libroDto.titulo || !libroDto.descripcion || !libroDto.autorId) {
        throw new Error('Campos incompletos: título, descripción y autorId son obligatorios');
      }
  
      // Si las validaciones son exitosas, crea el libro
      const libro = await Libro.create(libroDto);
      return libroDto.toDto(libro);
    },
    async updateLibro(id, libroData){
        const libro = await Libro.findByPk(id);
        if (!libro) {
            throw new Error('Libro no encontrado')
        }
        await libro.update(libroData);
        return libroDto.toDto(libro);
    },
    async deleteLibro(id){
        const libro = await Libro.findByPk(id);
        if (!libro) {
            throw new Error('Libro no encontrado')
            
        }
        await libro.destroy();
        return libroDto.toDto(libro);
    }

}