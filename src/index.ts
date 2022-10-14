require('dotenv').config();

import cors, { CorsOptions } from 'cors';
import express from 'express';
import { PORT } from './config/constants';
import { router } from './routes/Router';

const app = express();

const alloedOrigins = ['http://localhost:4000'];

const options: cors.CorsOptions = {
    origin: alloedOrigins
}

app.use(express.json());

app.get('/recipe/show/:id', router); 

app.get("/", (req, res) => res.send("Hello world"));

app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
});


