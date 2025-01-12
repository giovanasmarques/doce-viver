module.exports.home = (app, req, res) => {
  //aqui vamos fazer a chamada para o model do banco de dados.
  console.log('[Controller Home]');
  res.render('index.ejs', { });
};
