const dbConnection = require('../../config/dbConnection');
const { consultarCardapio } = require('../models/cardapio');

module.exports.cardapio = (app, req, res) => {
  //aqui vamos fazer a chamada para o model do banco de dados.
  dbConn = dbConnection();

  consultarCardapio(dbConn, (error, cardapio) =>{
    console.log('erro', error);
    console.log("Resultado", cardapio);
    res.render('cardapio.ejs', {menu: cardapio});
  })
};