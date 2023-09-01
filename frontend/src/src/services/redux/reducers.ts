import { combineReducers } from "redux";
import { v4 as uuid } from 'uuid';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  TOGGLE_TODO,
} from "./actions";
import {
  TodoActionTypes,
  TodoModel,
} from "./types";
import { useId } from "react";
import todoService from '../todo/todoService';

const todoReducer = (
  state: TodoModel[] = [],
  action: TodoActionTypes
): TodoModel[] => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: uuid(),
          title: action.title,
          description: action.description,
          dueDate: action.dueDate,
          completed: false,
        },
      ];
    case REMOVE_ITEM:
      return [...state.filter((item) => item.id !== action.id)];
    case TOGGLE_TODO:
      return state.map((todo: TodoModel) =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed, completedDate: new Date() }
          : todo
      );
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  todo: todoReducer,
});

export { rootReducer, todoReducer };
