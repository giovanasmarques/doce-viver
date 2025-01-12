const app = require('./config/server');
const routes = require('./app/routes/routes');

// Paginas de exibicao de conteudo
routes.home(app);
routes.cardapio(app);
routes.sobreNos(app);
routes.ifsp(app);
routes.meusPedidos(app);


//Paginas com interacao do usuario (forms)
routes.galeria(app);
routes.fazerPedido(app);
routes.faleConosco(app);
routes.editarCardapio(app);

//Paginas de autenticacao
routes.login(app);
routes.admin(app);
routes.cadastro(app);
routes.sair(app);

//Página não encontrada
routes.routeNotFound(app);
