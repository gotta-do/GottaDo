export type ToDoType = 'short-term' | 'long-term' | 'note';

export interface IToDo {
  label: string;
  isChecked: boolean;
  type: ToDoType;
}

export interface TaskListProps {
  title: string;
  ico: JSX.Element;
  type: ToDoType
}