module.exports = {    
    consultarComentario: (dbConn, callback) => {
        //console.log('Model da home');
        const sql = 'SELECT cardapio_id, comentario FROM galeria';
        dbConn.query(sql, callback);
    },

    // Definindo a função para adicionar o comentário
   // Definindo a função para adicionar o comentário
    adicionarComentario: (app, req, res) => {
        // Pegar os dados enviados pelo formulário
        const cardapio_id = req.query.cardapio_id; // ID da obra enviado pela URL
        const comentario = req.body.comentario; // Comentário enviado pelo formulário

        // Conexão com o banco de dados
        const dbConn = require('../../config/dbConnection'); // Seu arquivo de conexão com o banco

        // Comando SQL para inserir o comentário na tabela de comentários
        const sql = 'INSERT INTO galeria ( comentario, cardapio_id) VALUES ($1, $2)';

        // Executando a query de inserção no banco de dados
        dbConn.query(sql, [comentario, cardapio_id], (err, result) => {
            if (err) {
                console.error('Erro ao inserir o comentário: ', err);
                res.status(500).send('Erro ao adicionar comentário.');
                return;
            }
            console.log('Comentário inserido com sucesso!');
            
            // Redirecionar de volta para a página principal ou onde for necessário
            res.redirect('/galeria');
        });
    },

    consultarCurtidas: (dbConn, callback) => {
        //console.log('Model da home');
        const sql = 'SELECT * FROM curtida';
        dbConn.query(sql, callback);
    },

    incrementoCurtida: (app, req, res) => {
        const cardapio_id = req.query.cardapio_id; // ID do item do cardápio
    
        // Conexão com o banco de dados
        const dbConn = require('../../config/dbConnection');
    
        // Primeiro, obtemos o número atual de curtidas para incrementar
        const getCurrentLikesSql = 'SELECT curtidas FROM curtida WHERE cardapio_id = $1';
        dbConn.query(getCurrentLikesSql, [cardapio_id], (err, results) => {
            if (err) {
                console.error('Erro ao obter curtidas:', err);
                res.status(500).send('Erro ao incrementar curtidas.');
                return;
            }
    
            console.log(results.rows)
            let curtidas_new = results.rows[0].curtidas + 1;
    
            // Atualizar curtidas no banco de dados
            const updateLikesSql = 'UPDATE curtida SET curtidas = $1 WHERE cardapio_id = $2';
            dbConn.query(updateLikesSql, [curtidas_new, cardapio_id], (err, result) => {
                if (err) {
                    console.error('Erro ao incrementar curtidas:', err);
                    res.status(500).send('Erro ao incrementar curtidas.');
                    return;
                }
                console.log('Curtida incrementada com sucesso!');
                res.redirect('/galeria');
            });
        });
    }
}