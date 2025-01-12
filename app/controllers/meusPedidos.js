const dbConnection = require('../../config/dbConnection');
const { consultarMeusPedidos, consultarTodosPedidos } = require('../models/meusPedidos');

module.exports.meusPedidos = (app, req, res) => {
    //aqui vamos fazer a chamada para o model do banco de dados.
    console.log('[Controller Ver Pedidos]');
    dbConn = dbConnection();

    if(req.session.user.admin == 1){
        consultarTodosPedidos(dbConn, (error, todosPedidos) =>{
            console.log('erro', error);
            console.log("Resultado", todosPedidos);
            res.render('meusPedidos.ejs', {pedidos: todosPedidos});
        })
    }else{
        consultarMeusPedidos(dbConn, req.session.user.id, (error, meusPedidos) =>{
            console.log('erro', error);
            console.log("Resultado", meusPedidos);
            res.render('meusPedidos.ejs', {pedidos: meusPedidos});
        })
    }
};