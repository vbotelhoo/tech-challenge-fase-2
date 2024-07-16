import express from 'express';
import bookController from './controllers/book.js';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/book', bookController);

app.listen(PORT, () => {
    console.log('App online na porta ' + PORT);
});

