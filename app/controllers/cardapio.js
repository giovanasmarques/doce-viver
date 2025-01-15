const dbConn = require('../../config/dbConnection'); // Importa o Pool já configurado
const { consultarCardapio } = require('../models/cardapio');

module.exports.cardapio = (app, req, res) => {
  // Faz a chamada para o model do banco de dados
  consultarCardapio(dbConn, (error, cardapio) => {
    if (error) {
      console.error('Erro ao consultar o cardápio:', error);
      return res.status(500).send('Erro no servidor ao consultar o cardápio');
    }

    console.log('Resultado:', cardapio.rows);
    res.render('cardapio.ejs', { menu: cardapio.rows });
  });
};
