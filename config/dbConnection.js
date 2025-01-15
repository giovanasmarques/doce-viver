const { Pool } = require('pg');

// Configuração da conexão
const dbConn = new Pool({
  user: 'doceviver_hpfm_user',
  host: 'dpg-cu3ostpu0jms73dn4nmg-a.oregon-postgres.render.com',
  database: 'doceviver_hpfm',
  password: 'Cxg35dCTAQqBHeY925teNfVk3ZXHa4Ru',
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Para desenvolvimento; configure adequadamente para produção
  },
});

dbConn.connect()
  .then(() => console.log('Conectado ao PostgreSQL com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao PostgreSQL:', err));

module.exports = dbConn;
