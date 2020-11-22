export type ToDoType = 'short-term' | 'long-term' | 'note';

export interface IToDo {
  id: number
  task: string;
  isChecked: boolean;
  type: ToDoType;
}

export interface ToDoListFrameProps {
  title: string;
  ico: JSX.Element;
  type: ToDoType;
  toDos: IToDo[];
}

export interface ToDoListProps {
  type: ToDoType;
  toDos: IToDo[];
}