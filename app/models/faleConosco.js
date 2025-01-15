// models/faleConosco.js
module.exports = {
    // Função para inserir a mensagem no banco de dados
    adicionarMensagem: (dbConn, dados, callback) => {
        const { name, email, phone, message } = dados;
        const sql = 'INSERT INTO fale_conosco (nome, email, telefone, mensagem) VALUES ($1, $2, $3, $4)';

        // Executa a query de inserção
        dbConn.query(sql, [name, email, phone, message], callback);
    }
};