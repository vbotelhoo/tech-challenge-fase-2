import express from 'express';
import bookController from './controllers/book.js';
import bodyParser from 'body-parser';
import '../dotenv-config.js'

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/book', bookController);

app.listen(PORT, () => {
    console.log('App online na porta ' + PORT);
});

