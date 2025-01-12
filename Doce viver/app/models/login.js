
const dbConnection = require('../../config/dbConnection');

module.exports.autenticarUsuario = (dbConn, email, callback) => {
    const sql = 'SELECT * FROM clientes WHERE email = (?)';
    dbConn.query(sql, email, callback);
};