
const dbConn = require('../../config/dbConnection');

module.exports.salvarUsuario = (dbConn, nome, email, senha, data_nascimento, callback) => {
    const query = 'INSERT INTO clientes (nome, email, senha, data_nascimento) VALUES ($1, $2, $3, $4)';
    dbConn.query(query, [nome, email, senha, data_nascimento], (err, result) => {
      callback(err);
    });
};