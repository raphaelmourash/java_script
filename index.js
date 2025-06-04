require('dotenv').config(); // Carrega o .env
const express = require('express');
const path = require('path'); 

const app = express();
const port = 3000;

// Servir arquivos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

console.log('Conectando ao banco:', process.env.PGDATABASE);

//debug porta

/*app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}); */ 
