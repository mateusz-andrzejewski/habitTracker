import { Habit } from './shared/models/habit';

export const sample_habits: Habit[] = [
  {
    id: '1',
    name: 'pływanie',
    category: ['body'],
    dateStart: '2023-01-19',
    dateEnd: '2023-04-19',
    frequencyWeek: 4,
  },
  {
    id: '1',
    name: 'nie jedzenie słodyczy',
    category: ['body'],
    dateStart: '2023-01-19',
    dateEnd: '2023-04-19',
    frequencyWeek: 7,
  },
  {
    id: '2',
    name: 'medytacja',
    category: ['spirit'],
    dateStart: '2023-01-19',
    dateEnd: '2023-04-19',
    frequencyWeek: 1,
  },
  {
    id: '3',
    name: 'relaksacja mięśniowa',
    category: ['spirit'],
    dateStart: '2023-01-25',
    dateEnd: '2023-04-25',
    frequencyWeek: 5,
  },
  {
    id: '4',
    name: 'praca nad biznesem',
    category: ['money', 'spirit'],
    dateStart: '2023-01-19',
    dateEnd: '2023-04-19',
    frequencyWeek: 1,
  },
  {
    id: '5',
    name: 'spisywanie rozchodu',
    category: ['money'],
    dateStart: '2023-01-25',
    dateEnd: '2023-04-25',
    frequencyWeek: 1,
  },
];
