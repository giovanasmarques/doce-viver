console.log('[Config] Server');
let express = require('express'); // O express retorna uma função
let expressSession = require('express-session');
let puppeteer = require('puppeteer');

let app = express(); //express é uma função. 
let port = 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.listen(port, function(){
	console.log('Servidor rodando com express na porta', port);
});

app.use(expressSession({
	secret: 'FeiJuAda',
	resave: false,
	saveUninitialized: false
}));


app.use((req, res, next) => {
	res.locals.user = req.session.user || null; // Define a variável `user` como global
	next();
});

module.exports = app;

console.log("Tudo certo, acesso em: http://localhost:"+port+"/")

// export default app;