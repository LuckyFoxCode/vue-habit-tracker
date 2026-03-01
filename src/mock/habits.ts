import type { Habit } from '@/types';

export const MOCK_HABITS: Habit[] = [
  {
    id: '1',
    title: 'Drink 2L of water',
    createdAt: new Date('2025-07-20'),
    completedDates: ['2025-08-01', '2025-08-02'],
  },
  {
    id: '2',
    title: 'Morning workout',
    createdAt: new Date('2025-07-21'),
    completedDates: ['2025-08-03'],
  },
  {
    id: '3',
    title: 'Master Vue 3 Composition API',
    createdAt: new Date('2025-07-25'),
    completedDates: ['2025-08-01', '2025-08-02', '2025-08-03'],
  },
  {
    id: '4',
    title: 'Read 20 pages',
    createdAt: new Date('2025-07-28'),
    completedDates: [],
  },
  {
    id: '5',
    title: '10 min meditation',
    createdAt: new Date('2025-07-30'),
    completedDates: ['2025-08-02'],
  },
  {
    id: '6',
    title: 'Evening walk',
    createdAt: new Date('2025-08-01'),
    completedDates: ['2025-08-01'],
  },
  {
    id: '7',
    title: 'Deep work: Coding',
    createdAt: new Date('2025-08-01'),
    completedDates: ['2025-08-02', '2025-08-03'],
  },
  {
    id: '8',
    title: 'Learn 5 new English words',
    createdAt: new Date('2025-08-02'),
    completedDates: [],
  },
  {
    id: '9',
    title: 'Plan tomorrow',
    createdAt: new Date('2025-08-02'),
    completedDates: ['2025-08-02'],
  },
  {
    id: '10',
    title: 'Night stretch',
    createdAt: new Date('2025-08-03'),
    completedDates: [],
  },
];
