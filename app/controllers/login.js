const dbConn = require('../../config/dbConnection');
const { autenticarUsuario } = require('../models/login');
let crypto = require('crypto');

module.exports.login = (app, req, res) => {
  //aqui vamos fazer a chamada para o model do banco de dados.
  console.log('[Controller login]');
  res.render('login.ejs', {status: 0, msg: "-"});
};

module.exports.autenticarUsuario = (req, res) => {
  console.log('[Controller Autenticar Usuário]');

  const email = req.body.email;
  const senha = crypto.createHash('md5').update(req.body.senha).digest('hex');
  
  // Chamada ao model para cadastrar o usuário
  console.log(email);
  console.log(senha);
  autenticarUsuario(dbConn, email, (error, result) => {
    console.log(result.rows)
    if (result !== undefined) {
      result = result.rows;
      user = result[0];
      console.log("USER: ");
      console.log(user);
      if(user === undefined){
        console.log("Usuário não existe");
        res.render('login.ejs', {status: 1, msg: "Usuário não existe"});
      }else{
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
          res.render('login.ejs', {status: 1, msg: "Senha incorreta"});
        }
      }
    } else {
      console.log("Usuário não existe");
      res.render('login.ejs', {status: 1, msg: "Usuário não existe"});
    }
  });
};