import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import apiRoute from '../api';

const app = express();
const PORT = process.env.PORT || 8080;

// config
app.set('port', PORT);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api', apiRoute);

export default app;