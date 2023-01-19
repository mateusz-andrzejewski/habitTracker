import { Habit } from './shared/models/habit';

export const sample_habits: Habit[] = [
  {
    id: '1',
    name: 'bieganie',
    category: ['body'],
    dateStart: '2023-01-19',
    dateEnd: '2023-04-19',
    frequencyPerDay: 2,
  },
  {
    id: '2',
    name: 'medytacja',
    category: ['mind'],
    dateStart: '2023-01-19',
    dateEnd: '2023-04-19',
    frequencyPerDay: 1,
  },
  {
    id: '3',
    name: 'praca nad biznesem',
    category: ['money'],
    dateStart: '2023-01-19',
    dateEnd: '2023-04-19',
    frequencyPerDay: 1,
  },
];
