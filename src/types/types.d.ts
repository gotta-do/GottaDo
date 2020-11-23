export type TodoType = 'short-term' | 'long-term' | 'note';

export interface Todo {
  id: string;
  task: string;
  isDone: boolean;
  type: TodoType;
}

export interface TodoListFrameProps {
  title: string;
  ico: JSX.Element;
  type: TodoType;
  todos: Todo[];
}

export interface TodoListProps {
  type: TodoType;
  todos: Todo[];
}

export interface State {
    todos: Todo[];
    selectedTodo: string | null;
  }