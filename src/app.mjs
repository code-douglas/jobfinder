import './config/configEnv.mjs';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Chegou na home.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
