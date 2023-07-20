const LibroModel = require('./libro')
const AutorModel = require('./autor')

// Definir las relaciones entre los modelos
AutorModel.hasMany(LibroModel, { foreignKey: 'autorId', as: 'libros' });
LibroModel.belongsTo(AutorModel, { foreignKey: 'autorId', as: 'autor' });

module.exports = {
  Libro: LibroModel,
  Autor: AutorModel
};

