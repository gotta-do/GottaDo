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
  toggleTodoActionCreator,
  removeTodoActionCreator,
} from '../redux/actions';
import React from 'react';
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

const TodoList: React.FC<types.TodoListProps> = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: types.State) => state.todos);
  console.log('TODOS from useSelector on TodoList ' + JSON.stringify(todos));

  const classes = useStyles();

  // const handleRemoveTodo = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  // ): void => {
  //   event.preventDefault();
  //   // const todo = (event.target as HTMLInputElement).value;
  //   console.log('TODO IS: ' + todo);
  //   dispatch(removeTodoActionCreator({ id: event.target.todo.id }));
  // };

  return (
    <List dense className={classes.list}>
      {todos.map((todo, index) =>
        props.type === todo.type ? (
          <ListItem key={todo.id}>
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
              <IconButton
                edge='end'
                onClick={() => {
                  console.log('ID being dispatched is: ' + todo.id);
                  dispatch(removeTodoActionCreator({ id: todo.id }));
                }}
              >
                <DeleteIcon />
              </IconButton>
              {/* <IconButton
                  edge='end'
                  onClick={(event) => handleRemoveTodo(event)}
                >
                  <DeleteIcon />
                </IconButton> */}
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
