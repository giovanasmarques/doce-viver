module.exports = {    
    consultarPedido: (dbConnection, callback) => {
        const sql = 'SELECT * FROM cardapio';
        dbConnection.query(sql, callback);
    },

    salvarPedido: (dbConnection, cliente_id, total, itens, callback) => {
        const sql = 'INSERT INTO pedidos (cliente_id, total, itens) VALUES (?, ?, ?)';
        dbConnection.query(sql, [cliente_id, total, itens], callback);
    }
}