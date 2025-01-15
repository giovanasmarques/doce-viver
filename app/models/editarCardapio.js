module.exports = {    
    consultarCardapio: (dbConn, callback) => {
        const sql = 'SELECT * FROM cardapio';
        dbConn.query(sql, callback);
    },

    adicionarItem: (dbConn, categoria, nome, detalhes, preco, callback) => {
        const sql = 'INSERT INTO cardapio (categoria, nome_item, detalhes, preco) VALUES ($1, $2, $3, $4)';
        dbConn.query(sql, [categoria, nome, detalhes, preco], callback);
    },

    editarItem: (dbConn, categoria, nome, detalhes, preco, id, callback) => {
        const sql = 'UPDATE cardapio SET categoria = $1, nome_item = $2, detalhes = $3, preco = $4 WHERE id = $5';
        dbConn.query(sql, [categoria, nome, detalhes, preco, id], callback);
    },

    excluirItem: (dbConn, id, callback) => {
        const sql = 'DELETE FROM cardapio WHERE id = $1';
        dbConn.query(sql, [id], callback);
    }
}
