import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

import apiRoute from '../api';
import notFound from '../middlewares/notFound';
import { options } from '../config/swagger/swaggerOptions';

const app = express();
const PORT = process.env.PORT || 8080;

// config
app.set('port', PORT);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true,
  })
);

// routes
app.use('/api', apiRoute);

// swagger
const specs = swaggerJsDoc(options);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(specs));

app.use(notFound);

export default app;
