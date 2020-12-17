import {
  Checkbox,
  createStyles,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import {
  // createTodoActionCreator,
  toggleTodoActionCreator,
  removeTodoActionCreator,
} from '../redux/actions';
// import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
// import { State, Todo, TodoListProps, DispatchType } from '../types/types';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../types/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: '100%',
    },
  }),
);

const TodoList: React.FC<types.TodoListProps> = (props) =>
  // props: TodoListProps & DispatchProps & StateProps & OwnProps,
  {
    // const { type } = props;
    const dispatch = useDispatch();
    const todos = useSelector((state: types.State) => state.todos);

    const classes = useStyles();

    const handleRemoveTodo = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ): void => {
      event.preventDefault();
      const todo = (event.target as HTMLInputElement).value;
      dispatch(removeTodoActionCreator({ id: todo }));
    };

    return (
      <List dense className={classes.list}>
        {todos.map((todo, index) =>
          props.type === todo.type ? (
            <ListItem>
              <Checkbox
                checked={todo.isDone}
                // onChange={toggleCheckedActionCreator}
                onChange={() =>
                  dispatch(
                    toggleTodoActionCreator({
                      id: todo.id,
                      isDone: !todo.isDone,
                    }),
                  )
                }
              />
              <ListItemText primary={todo.task} />
              <ListItemSecondaryAction>
                <IconButton edge='end' onClick={handleRemoveTodo}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ) : null,
        )}
      </List>
    );
  };

// const mapStateToProps = (state: State) => {
//   return {
//     todos: state.todos,
//   };
// };

// const mapDispatchToProps = (dispatch: DispatchType) => {
//   return {
//     toggleCheckedActionCreator: () =>
//       dispatch({ type: 'TOGGLE', payload: todo.isDone }),
//     deleteTodoActionCreator: () => dispatch({ type: 'REMOVE' }),
//   };
// };

export default TodoList;
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
