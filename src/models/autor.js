const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Importa la instancia de Sequelize

const Autor = sequelize.define('Autor', {
  // Aquí deberían estar definidos los campos y sus tipos de datos
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Autor;
