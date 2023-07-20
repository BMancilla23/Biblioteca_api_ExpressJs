const { DataTypes} = require("sequelize");
const sequelize = require('../config/config')

/* module.exports = (sequelize, DataTypes) => {
    const Libro = sequelize.define('Libro', {
        titulo: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        autorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true // Evita la pluralización del nombre de la tabla
    });
    Libro.associate = (models) => {
        Libro.belongsTo(models.Autor, {foreignKey: 'autorId', as: 'autor'});
    };
    return Libro;
}; */

    const Libro = sequelize.define('Libro', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
          },
          descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
          },
          autorId: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
    });
module.exports = Libro;