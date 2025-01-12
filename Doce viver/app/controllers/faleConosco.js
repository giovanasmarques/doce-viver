// controllers/faleConosco.js
const dbConnection = require('../../config/dbConnection');
const { adicionarMensagem } = require('../models/faleConosco');

module.exports = {
  // Função para renderizar o formulário "Fale Conosco"
  faleConosco: (req, res) => {
    console.log('[Controller Fale Conosco]');
    
    res.render('faleConosco.ejs', {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      formAction: '/faleConosco',
      socialLinks: {
        instagram: 'https://www.instagram.com/doce_viver_sh/',
        whatsapp: 'https://api.whatsapp.com/send?phone=seu-numero-de-telefone',
        maps: 'https://maps.app.goo.gl/xmEBu6z6M5VTdjGd9'
      }
    });
  },

  // Função para processar o envio da mensagem
  enviarMensagem: (req, res) => {
    console.log('[Controller Fale Conosco - Enviar Mensagem]');
    
    const { name, email, phone, message } = req.body;

    // Verificação dos campos obrigatórios
    if (!name || !email || !message) {
      return res.status(400).send('Campos obrigatórios não preenchidos!');
    }

    // Conexão com o banco de dados
    const dbConn = dbConnection();
    adicionarMensagem(dbConn, { name, email, phone, message }, (err, result) => {
      if (err) {
        console.error('Erro ao salvar mensagem: ', err);
        return res.status(500).send('Erro ao enviar mensagem.');
      }

      console.log('Mensagem enviada com sucesso!');
      res.redirect('/faleConosco');
    });
  }
};