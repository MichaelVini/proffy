import express from 'express';
import routes from './routes';

const app = express();

//Plugin para que o express entenda o formato json.
app.use(express.json());

app.use(routes);

app.listen(3333);