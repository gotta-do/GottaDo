import {
  Checkbox,
  createStyles,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import {
  createTodoActionCreator,
  editTodoActionCreator,
  toggleCheckedActionCreator,
  deleteTodoActionCreator,
  selectedTodoActionCreator,
} from '../../redux-toolkit/redux-toolkit';
import { useSelector, useDispatch } from 'react-redux';

import React, { useState } from 'react';
import { IState, ITodo, TodoListProps, TodoType } from '../../types/types';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: '100%',
    },
  }),
);

export default function TodoList({ type }: TodoListProps) {
  // redux
  const deleteTodo = (index: number) => {};
  const dispatch = useDispatch();
  const todos = useSelector((state: IState) => state.todos);
  // state
  const [newTodoInput, setNewTodoInput] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  // theme style
  const classes = useStyles();

  // const ListOutput = (type: TodoType) => {
  //   todos.map((el: ITodo, index) =>
  //     type === el.type ? (
  //       <ListItem>
  //         <Checkbox
  //           checked={el.isDone}
  //           onChange={() =>
  //             dispatch(
  //               toggleCheckedActionCreator({
  //                 id: el.id,
  //                 isDone: !el.isDone,
  //                 task: el.task,
  //                 type: el.type,
  //               }),
  //             )
  //           }
  //         />
  //         <ListItemText primary={el.task} />
  //         <ListItemSecondaryAction>
  //           <IconButton
  //             edge='end'
  //             onClick={() =>
  //               dispatch(
  //                 deleteTodoActionCreator({
  //                   id: el.id,
  //                   isDone: el.isDone,
  //                   task: el.task,
  //                   type: el.type,
  //                 }),
  //               )
  //             }
  //           >
  //             <DeleteIcon />
  //           </IconButton>
  //         </ListItemSecondaryAction>
  //       </ListItem>
  //     ) : null,
  //   );
  // };

  return (
    <List dense className={classes.list}>
      {todos.map((el: ITodo, index) =>
        type === el.type ? (
          <ListItem>
            <Checkbox
              checked={el.isDone}
              onChange={() =>
                dispatch(
                  toggleCheckedActionCreator({
                    id: el.id,
                    isDone: !el.isDone,
                    task: el.task,
                    type: el.type,
                  }),
                )
              }
            />
            <ListItemText primary={el.task} />
            <ListItemSecondaryAction>
              <IconButton
                edge='end'
                onClick={() =>
                  dispatch(
                    deleteTodoActionCreator({
                      id: el.id,
                      isDone: el.isDone,
                      task: el.task,
                      type: el.type,
                    }),
                  )
                }
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ) : null,
      )}
    </List>
  );
}
