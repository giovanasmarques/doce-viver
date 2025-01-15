const dbConn = require('../../config/dbConnection');
const { consultarCardapio, adicionarItem, editarItem, excluirItem } = require('../models/editarCardapio');

module.exports.editarCardapio = (req, res) => {
    //aqui vamos fazer a chamada para o model do banco de dados.
    console.log('[Controller Editar Cardapio]');
  
    consultarCardapio(dbConn, (error, cardapio) =>{
      console.log('erro', error);
      console.log("Resultado", cardapio);
      res.render('editarCardapio.ejs', {menu: cardapio.rows});
    })
};

module.exports.adicionarItem = (req, res) => {
    const categoria = req.body.categoria;
    const nome      = req.body.nome;
    const detalhes  = req.body.detalhes;
    const preco     = req.body.preco;
    console.log('[Controller Adicionar Item]');
    
    // Chamada ao model para cadastrar o item
    adicionarItem(dbConn, categoria, nome, detalhes, preco, (error, result) => {
      if (error) {
        // Caso haja erro, passamos a variável erros com a mensagem de erro para a view
        console.log(error);
        res.redirect('/editarCardapio');
      } else {
        // Caso não haja erro, redireciona para a tela de edicao novamente
        res.redirect('/editarCardapio');
      }
    });
};

module.exports.editarItem = (req, res) => {
  const id =  req.body.id;
  const categoria = req.body.categoria;
  const nome = req.body.nome;
  const detalhes = req.body.detalhes;
  const preco = req.body.preco;
  console.log('[Controller Editar Pedido]');

  // Chamada ao model para cadastrar o usuário
  editarItem(dbConn, categoria, nome, detalhes, preco, id, (error, result) => {
    if (error) {
      // Caso haja erro, passamos a variável erros com a mensagem de erro para a view
      console.log(error);
      res.redirect('/editarCardapio');
    } else {
      // Caso não haja erro, redireciona para a tela de login com sucesso
      res.redirect('/editarCardapio');
    }
  });
};


// Exclui um evento pelo ID
module.exports.excluirItem = async (req, res) => {
  const { id } = req.params; // Extrai o ID do evento dos parâmetros da URL
  console.log('[Controller Excluir Pedido]');
  console.log(id);

  // Chamada ao model para cadastrar o usuário
  excluirItem(dbConn, id, (error, result) => {

    if (error) {
      // Caso haja erro, passamos a variável erros com a mensagem de erro para a view
      console.log(error);
      res.redirect('/editarCardapio');
    } else {
      // Caso não haja erro, redireciona para a tela de login com sucesso
      res.redirect('/editarCardapio');
    }
  });
};