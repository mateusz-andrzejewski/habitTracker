import express from 'express';
import cors from 'cors';

import { sample_habits } from './DATA';
import habitRouter from './routers/habit.router';

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

app.use('/api/habits', habitRouter);

const port = 5000;

app.listen(port, () => {
  console.log('server starts on http://localhost:' + port);
});
