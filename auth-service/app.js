import express from 'express';

const app = express();
const port = 3001;

app.get('/auth', (req, res) => {
  res.json({ status: 'Authenticated', service: 'Auth Service' });
});

app.listen(port, () => {
  console.log(`Web Service running on http://localhost:${port}`);
});
