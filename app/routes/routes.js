const { home } = require('../controllers/home');
const { cardapio } = require('../controllers/cardapio');
const { sobreNos } = require('../controllers/sobreNos');
const { ifsp } = require('../controllers/ifsp');
const { meusPedidos } = require('../controllers/meusPedidos');

const { galeria } = require('../controllers/galeria');
const { adicionarComentario } = require('../models/galeria');
const { incrementoCurtida } = require('../models/galeria');
const { fazerPedido, fecharPedido, salvarPedido } = require('../controllers/fazerPedido'); // Incluído o controller de fecharPedido
const { faleConosco, enviarMensagem } = require('../controllers/faleConosco');
const { editarCardapio, adicionarItem, editarItem, excluirItem } = require('../controllers/editarCardapio');

const { login, autenticarUsuario } = require('../controllers/login');
const { admin, autenticarAdministrador } = require('../controllers/admin');
const { cadastro, salvarUsuario } = require('../controllers/cadastro');

module.exports = {

  // Rota da página Home
  home: (app) => {
    app.get('/', function (req, res) {
      home(app, req, res); // Controller da home
    });
  },

  // Rota do cardápio
  cardapio: (app) => {
    app.get('/cardapio', function (req, res) {
      cardapio(app, req, res); // Exibe o cardápio
    });
  },

  // Rota sobre a empresa
  sobreNos: (app) => {
    app.get('/sobreNos', function (req, res) {
      sobreNos(app, req, res); // Página sobre a empresa
    });
  },

  // Rota sobre o IFSP
  ifsp: (app) => {
    app.get('/ifsp', function (req, res) {
      ifsp(app, req, res); // Página sobre o IFSP
    });
  },
  
  // Rota para exibir os pedidos do cliente
  meusPedidos: (app) => {
    app.get('/meusPedidos', function (req, res) {
      if(req.session.user){
        meusPedidos(app, req, res);
      }
     else{
        res.render('notFound.ejs'); // Página de erro para rota não encontrada
      }
    });
  },

  // Rota da galeria com a funcionalidade de adicionar comentário e incrementar curtida
  galeria: (app) => {
    app.get('/galeria', function (req, res) {
      galeria(app, req, res); // Página da galeria
    });

    // Adiciona um comentário na galeria
    app.post('/galeria/adicionar', function (req, res) {
      adicionarComentario(app, req, res);
    });

    // Incrementa a curtida na galeria
    app.post('/galeria/incremento', function (req, res) {
      incrementoCurtida(app, req, res);
    });
  },

  // Rota para fazer pedido
  fazerPedido: (app) => {
    app.get('/fazerPedido', function (req, res) {
      fazerPedido(app, req, res); // Controlador de exibição do cardápio para fazer pedido
    });

    app.post('/finalizarPedido', (req, res) => {
      salvarPedido(req, res);
    });
  },

  // Rota para fechar pedido
  fecharPedido: (app) => {
    app.post('/fecharPedido', function (req, res) {
      fecharPedido(app, req, res); // Controlador para processar o fechamento e salvamento do pedido
    });
  },

  // Rota para o Fale Conosco
  faleConosco: (app) => {
    // Exibe o formulário de "Fale Conosco"
    app.get('/faleConosco', (req, res) => {
      faleConosco(req, res);
    });
  
    // Processa o envio do formulário
    app.post('/faleConosco', (req, res) => {
      enviarMensagem(req, res);
    });
  },

  // Rota para editar cardapio ADM
  editarCardapio: (app) => {
    // Exibe o formulário de "Editar Cardápio"
    app.get('/editarCardapio', (req, res) => {
      if(req.session.user){
        if(req.session.user.admin == 1){
          editarCardapio(req, res);
        }
      }
    });

    app.post('/editarCardapio/adicionar', (req, res) => {
      adicionarItem(req, res);
    });

    app.post('/editarCardapio/:id', (req, res) => {
      if(req.session.user){
        if(req.session.user.admin == 1){
          editarItem(req, res);
        }
      }
    });

    app.post('/excluirCardapio/:id', (req, res) => {
      if(req.session.user){
        if(req.session.user.admin == 1){
          excluirItem(req, res);
        }
      }
    });
  },

  // Rota para o Login
  login: (app) => {
    app.get('/login', function(req, res) {
      login(app, req, res);
    });

    app.post('/autenticar', (req, res) => {
      autenticarUsuario(req, res);
    });
  },

  // Rota para o Login
  admin: (app) => {
    app.get('/admin', function(req, res) {
      admin(app, req, res);
    });

    app.post('/autenticar', (req, res) => {
      autenticarAdministrador(req, res);
    });
  },
  
  // Rota para o Cadastro
  cadastro: (app) => {
    app.get('/cadastro', function(req, res) {
      cadastro(app, req, res);
    });

    app.post('/cadastroSucesso', (req, res) => {
      salvarUsuario(req, res);
    });
  },

  sair: (app) => {
    app.get('/sair', function (req, res) {
      req.session.user = null;
      res.redirect('/?message=logout_sucesso');
    });
  },

  // Rota para quando a URL não for encontrada
  routeNotFound: (app) => {
    app.get('*', function (req, res) {
      res.render('notFound.ejs'); // Página de erro para rota não encontrada
    });
  },
};