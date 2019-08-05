"use strict";

const Sequelize = require('sequelize')
const user = "krdgGqX1RC"
const password = "Lz5YFiVUwU"
const databaseName = "krdgGqX1RC"

const conexion = new Sequelize(user, databaseName, password, {
    host: 'remotemysql.com',
    dialect: 'mysql'
})

conexion.authenticate()
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err) => console.log("Error al conectar a la base de datos", err))

module.exports = conexion;