import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import ErrorHandler from './middleware/ErrorHandler';
import router from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(router);
app.use(ErrorHandler)

export default app;