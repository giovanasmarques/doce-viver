const dbConnection = require('../../config/dbConnection');
const { salvarUsuario } = require('../models/cadastro');
let crypto = require('crypto');

module.exports.cadastro = (app, req, res) => {
  //aqui vamos fazer a chamada para o model do banco de dados.
  console.log('[Controller cadastro]');
  res.render('cadastro.ejs', { });
};

module.exports.salvarUsuario = (req, res) => {
  console.log('[Controller Salvar Usuário]');

  const nome  = req.body.nome;
  const email = req.body.email;
  const senha = crypto.createHash('md5').update(req.body.senha).digest('hex');
  const data_nascimento = req.body.data_nascimento;
  
  // Estabelecendo a conexão com o banco
  dbConn = dbConnection();
  // Chamada ao model para cadastrar o usuário
  salvarUsuario(dbConn, nome, email, senha, data_nascimento, (error, result) => {
    if (error) {
      // Caso haja erro, passamos a variável erros com a mensagem de erro para a view
      console.log(error);
      res.render('cadastroSucesso', {mensagem: 'Falha ao realizar cadastro'});
    } else {
      // Caso não haja erro, redireciona para a tela de login com sucesso
      res.render('cadastroSucesso', {mensagem: 'Cadastro feito com sucesso!'});
    }
  });
};