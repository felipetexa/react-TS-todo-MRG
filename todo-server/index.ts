import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import todosRoutes from './routes/todos';

const app = express();
const PORT = 5000; 

app.use(cors());
app.use(bodyParser.json());

app.use('/api/todos', todosRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
