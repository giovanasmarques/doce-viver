module.exports = {    
    consultarPedido: (dbConn, callback) => {
        const sql = 'SELECT * FROM cardapio';
        dbConn.query(sql, callback);
    },

    salvarPedido: (dbConn, cliente_id, total, itens, callback) => {
        const sql = 'INSERT INTO pedidos (cliente_id, total, itens) VALUES ($1, $2, $3)';
        dbConn.query(sql, [cliente_id, total, itens], (err, res) => {
            if (err) {
                console.error('Erro ao inserir pedido:', err); // Mostra o erro
                callback(err);
            } else {
                console.log('Pedido inserido com sucesso:', res.rows);
                callback(null, res);
            }
        });
    }
}