const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/route_users');
const taskRoutes = require('./routes/route_tasks');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.use('/api/tasks', taskRoutes);


const port = 8000;

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
