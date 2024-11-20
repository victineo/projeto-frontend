const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

const port = 8000;

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
