// models/faleConosco.js
module.exports = {
    // Função para inserir a mensagem no banco de dados
    adicionarMensagem: (dbConnection, dados, callback) => {
        const { name, email, phone, message } = dados;
        const sql = 'INSERT INTO fale_conosco (nome, email, telefone, mensagem) VALUES (?, ?, ?, ?)';

        // Executa a query de inserção
        dbConnection.query(sql, [name, email, phone, message], callback);
    }
};