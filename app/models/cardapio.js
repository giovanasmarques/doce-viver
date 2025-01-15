module.exports = {    
    consultarCardapio: (dbConn, callback) => {
        const sql = 'SELECT * FROM cardapio';
        dbConn.query(sql, callback);
    }
}

