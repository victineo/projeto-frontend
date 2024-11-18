const express = require('express');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

const port = 8000;

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});