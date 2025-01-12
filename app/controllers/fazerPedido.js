const dbConnection = require('../../config/dbConnection');
const { consultarPedido, salvarPedido } = require('../models/fazerPedido');

module.exports.fazerPedido = (app, req, res) => {
  //aqui vamos fazer a chamada para o model do banco de dados.
  console.log('[Controller Fazer Pedido]');
  dbConn = dbConnection();

  consultarPedido(dbConn, (error, fazerPedido) =>{
    console.log('erro', error);
    console.log("Resultado", fazerPedido);
    res.render('fazerPedido.ejs', {menu: fazerPedido, status_pedido: ""});
  })
};

module.exports.salvarPedido = (req, res) => {
  console.log('[Controller Salvar Pedido]');

  const cliente_id  = req.session.user.id;
  const total = req.body.total_pedido;
  var itens = req.body.pedidos_comanda;
  itens = itens.substring(0, itens.length - 2); /*Utilizado para remover os últimos 2 caracteres*/

  // Estabelecendo a conexão com o banco
  dbConn = dbConnection();
  // Chamada ao model para cadastrar o usuário
  salvarPedido(dbConn, cliente_id, total, itens, (error, result) => {
    if (error) {
      consultarPedido(dbConn, (error, fazerPedido) =>{
        console.log('erro', error);
        console.log("Resultado", fazerPedido);
        res.render('fazerPedido.ejs', {menu: fazerPedido, status_pedido: "Falha"});
      })
    } else {
      consultarPedido(dbConn, (error, fazerPedido) =>{
        console.log('erro', error);
        console.log("Resultado", fazerPedido);
        res.render('fazerPedido.ejs', {menu: fazerPedido, status_pedido: "Sucesso"});
      })
    }
  });
};

