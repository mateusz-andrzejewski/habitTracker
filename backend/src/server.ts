import express from 'express';
import cors from 'cors';

import { sample_habits } from './DATA';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

app.get('/api/currentHabits', (req, res) => {
  res.send(sample_habits);
});

app.get('/api/habitsFromCategory/:category', (req, res) => {
  if (req.params.category === 'all') return res.send(sample_habits);

  const categoryHabits = sample_habits.filter((habit) => {
    return habit.category.includes(req.params.category);
  });

  res.send(categoryHabits);
});

app.post('/api/addHabit', (req, res) => {
  console.log(req.body);
  res.status(200).send();
});

const port = 5000;

app.listen(port, () => {
  console.log('server starts on http://localhost:' + port);
});
