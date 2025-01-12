
const dbConnection = require('../../config/dbConnection');

module.exports.salvarUsuario = (dbConn, nome, email, senha, data_nascimento, callback) => {
    const query = 'INSERT INTO clientes (nome, email, senha, data_nascimento) VALUES (?, ?, ?, ?)';
    dbConn.query(query, [nome, email, senha, data_nascimento], (err, result) => {
      callback(err);
    });
};