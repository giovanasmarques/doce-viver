module.exports.teste = (app, req, res) => {
    //aqui vamos fazer a chamada para o model do banco de dados.
    console.log('[Controller teste]');
    res.render('teste.ejs', { });
  };