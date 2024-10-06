import axios from 'axios';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { loading: false, authData: null });
});

app.get('/check-auth', async (req, res) => {
  try {
    const authResponse = await axios.get('http://auth-service:3001/auth');
    res.json({ loading: false, authData: authResponse.data });
  } catch (error) {
    res.json({ loading: true, authData: null });
  }
});

app.listen(port, () => {
  console.log(`Web Service running on port ${port}`);
});
