const dbConn = require('../../config/dbConnection');
const { consultarPedido, salvarPedido } = require('../models/fazerPedido');

module.exports.fazerPedido = (app, req, res) => {
  //aqui vamos fazer a chamada para o model do banco de dados.
  console.log('[Controller Fazer Pedido]');

  consultarPedido(dbConn, (error, fazerPedido) =>{
    console.log('erro', error);
    console.log("Resultado", fazerPedido);
    res.render('fazerPedido.ejs', {menu: fazerPedido.rows, status_pedido: ""});
  })
};

module.exports.salvarPedido = (req, res) => {
  console.log('[Controller Salvar Pedido]');

  const cliente_id  = req.session.user.id;
  const total = req.body.total_pedido;
  var itens = req.body.pedidos_comanda;
  itens = itens.substring(0, itens.length - 2); /*Utilizado para remover os últimos 2 caracteres*/

  // Chamada ao model para cadastrar o usuário
  salvarPedido(dbConn, cliente_id, total, itens, (error, result) => {
    if (error === undefined) {
      consultarPedido(dbConn, (error, fazerPedido) =>{
        console.log('erro', error);
        console.log("Resultado", fazerPedido);
        console.log("Falha");
        res.render('fazerPedido.ejs', {menu: fazerPedido.rows, status_pedido: "Falha"});
      })
    } else {
      consultarPedido(dbConn, (error, fazerPedido) =>{
        console.log('erro', error);
        console.log("Resultado", fazerPedido);
        console.log("Sucesso");
        res.render('fazerPedido.ejs', {menu: fazerPedido.rows, status_pedido: "Sucesso"});
      })
    }
  });
};

