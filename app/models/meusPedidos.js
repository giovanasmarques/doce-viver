module.exports = {    
    consultarMeusPedidos: (dbConnection, cliente_id, callback) => {
        const sql = 'SELECT * FROM pedidos WHERE cliente_id = (?)';
        dbConnection.query(sql, [cliente_id], callback);
    },

    consultarTodosPedidos: (dbConnection, callback) => {
        const sql = 'SELECT p.data_pedido, p.total, p.itens, c.nome, c.email FROM pedidos as p LEFT JOIN clientes as c ON c.id = p.cliente_id';
        dbConnection.query(sql, callback);
    },
}