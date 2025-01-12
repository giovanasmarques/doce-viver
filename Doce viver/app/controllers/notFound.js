module.exports.notFound = (app, req, res) => {
    //aqui vamos fazer a chamada para o model do banco de dados.
    console.log('[Controller notFound]');
    res.render('notFound.ejs', { });
  };