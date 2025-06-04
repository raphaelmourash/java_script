// db.js
require('dotenv').config(); // carrega o .env aqui também, se ainda não tiver sido carregado
const { Pool } = require('pg');

// Ele vai automaticamente usar as variáveis do .env: PGUSER, PGPASSWORD etc.
const pool = new Pool();

module.exports = pool;