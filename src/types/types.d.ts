export type TodoType = 'short-term' | 'long-term' | 'note';

export interface ITodo {
  id: string;
  task: string;
  isDone: boolean;
  type: TodoType;
}

export interface TodoListFrameProps {
  title: string;
  ico: JSX.Element;
  type: TodoType;
  todos: ITodo[];
}

export interface TodoListProps {
  type: TodoType;
  todos: ITodo[];
}

export interface IState {
    todos: ITodo[];
    selectedTodo: string | null;
  }