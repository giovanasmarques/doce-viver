
const dbConn = require('../../config/dbConnection');

module.exports.autenticarUsuario = (dbConn, email, callback) => {
    const sql = 'SELECT * FROM clientes WHERE email = ($1)';
    dbConn.query(sql, [email], callback);
};