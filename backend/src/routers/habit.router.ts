import { Router } from 'express';
import { sample_habits } from '../DATA';

const router = Router();

router.get('/currentHabits', (req, res) => {
  res.send(sample_habits);
});

router.get('/habitsByCategory/:category', (req, res) => {
  if (req.params.category === 'all') return res.send(sample_habits);

  const categoryHabits = sample_habits.filter((habit) => {
    return habit.category.includes(req.params.category);
  });

  res.send(categoryHabits);
});

router.get('/habitById/:id', (req, res) => {
  const habit = sample_habits.find((habit) => habit.id === req.params.id);
  if (habit) {
    res.status(200).send(habit);
  } else {
    res.status(400);
  }
});

router.post('/addHabit', (req, res) => {
  console.log(req.body);
  res.status(200).send();
});

export default router;
