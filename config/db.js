const mysql = require('mysql2/promise');
require('dotenv').config();
const database = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});
// verify connection es correcta
// database.getConnection()
//     .then(connection => {
//         console.log("Conexión a la base de datos exitosa");
//         connection.release();
//     })
//     .catch(error => {
//         console.error("Error en la conexión a la base de datos:",error);
//     });
module.exports = database;