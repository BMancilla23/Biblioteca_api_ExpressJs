const express = require('express');
const autorRoutes = require('./routes/autorRoute');
const libroRoutes = require('./routes/libroRoute');
const sequelize = require('./config/config')

const app = express();
const port = 3000;

// Permite trabajar con datos Json
app.use(express.json());

// Autenticar la conexión a la base de datos
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida con éxito');
        try {
            // Sincronizar los modelos con la base de datos
            await sequelize.sync({ force: true });
            console.log('Tablas creadas en la base de datos');
        } catch (error) {
            console.log('Error al sincronizar las tablas:', error);
        }
    } catch (error) {
        console.log('Error al conectar a la base de datos', error);
    }
})();

// Rutas
app.use(autorRoutes);
app.use(libroRoutes);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto: ${port}`);
});
