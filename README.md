# Biblioteca - Api - ExpressJs

---

## Comandos git

Eliminar .git

```cmd
rm -rf .git
```

## Configurar y ejecutar migraciones en Sequalize

1. Instalar la CLI de Sequalize globalmente
```cmd
npm i -g sequalize-cli
```
2. Crear migracion para el modelo
```cmd
sequalize migration:generate --name create-libro
```
3. Crear migracion para el modelo si tienes src
```cmd
sequelize migration:generate --name create-libro --config src/config/config.js --migrations-path src/migrations
```
4. Ejecutar la migración creada
```cmd
sequelize db:migrate --config src/config/config.js --migrations-path src/migrations
```
