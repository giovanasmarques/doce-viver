const dbConnection = require('../../config/dbConnection');
// const { } = require('../models/galeria');
const {consultarComentario, consultarCurtidas} = require('../models/galeria');

module.exports.galeria = (app, req, res) => {
  //aqui vamos fazer a chamada para o model do banco de dados.
  console.log('[Controller galeria]');
  dbConn = dbConnection();
  
  consultarComentario(dbConn, (error, comentarios) =>{
    console.log('erro', error);
    console.log("Resultado", comentarios);

    consultarCurtidas(dbConn, (error, curtidas) =>{
      console.log('erro', error);
      console.log("Resultado", curtidas);
      res.render('galeria.ejs', {likes: curtidas, comments: comentarios}); //renderizo a view home.ejs
    })
  })
};

  