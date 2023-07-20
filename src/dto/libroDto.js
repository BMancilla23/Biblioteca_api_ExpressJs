module.exports = {
    toDto(libro){
        return {
            id: libro.id,
            titulo: libro.titulo,
            descripcion: libro.descripcion,
            autor: libro.autor ? {
                id: libro.autor.id,
                nombre: libro.autor.nombre,
                apellido: libro.autor.apellido
            }:null
        }
    }
}