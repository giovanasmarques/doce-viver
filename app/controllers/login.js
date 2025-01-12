const dbConnection = require('../../config/dbConnection');
const { autenticarUsuario } = require('../models/login');
let crypto = require('crypto');

module.exports.login = (app, req, res) => {
  //aqui vamos fazer a chamada para o model do banco de dados.
  console.log('[Controller login]');
  res.render('login.ejs', {});
};

module.exports.autenticarUsuario = (req, res) => {
  console.log('[Controller Autenticar Usuário]');

  const email = req.body.email;
  const senha = crypto.createHash('md5').update(req.body.senha).digest('hex');
  
  // Estabelecendo a conexão com o banco
  dbConn = dbConnection();
  // Chamada ao model para cadastrar o usuário
  autenticarUsuario(dbConn, email, (error, result) => {
    if (result.length > 0) {
      user = result[0];
      if(senha === user.senha){
        req.session.user = {
          id: user.id,
          nome: user.nome,
          data_nascimento: user.data_nascimento,
          data_registro: user.data_registro,
          email: user.email,
          admin: user.admin
        };
        console.log("Usuário conectado: ", req.session)
        res.redirect('/fazerPedido');
      }else{
        console.log("Senha incorreta");
        res.send("Senha incorreta");
      }
    } else {
      console.log("Usuário não existe");
      res.send("Usuário não existe");
    }
  });
};