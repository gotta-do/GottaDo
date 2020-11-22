import { IToDo } from '../interfaces/interfaces';

export const toDoArray: IToDo[] = [
  {
    id: 1,
    task: 'Finish app',
    isChecked: true,
    type: 'short-term',
  },
  {
    id: 2,
    task: 'Set up redux',
    isChecked: false,
    type: 'short-term',
  },
  {
    id: 3,
    task: 'Find new job',
    isChecked: true,
    type: 'long-term',
  },
  {
    id: 4,
    task: 'Get fit',
    isChecked: false,
    type: 'long-term',
  },
  {
    id: 5,
    task: 'Today I learned redux.',
    isChecked: false,
    type: 'note',
  },
  {
    id: 6,
    task: 'Would like to learn .....',
    isChecked: false,
    type: 'note',
  },
];
