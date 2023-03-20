import express from 'express';
import cors from 'cors';
import logger from 'morgan';

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

export default app;