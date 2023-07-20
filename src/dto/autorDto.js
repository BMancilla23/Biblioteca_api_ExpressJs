module.exports = {
    toDto(autor){
        return {
            id: autor.id,
            nombre: autor.nombre,
            apellido: autor.apellido,
            libros: autor.libros.map(libro => libro.id)
        }
    }
}