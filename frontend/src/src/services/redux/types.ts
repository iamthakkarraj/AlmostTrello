import {
  ADD_ITEM,
  TOGGLE_TODO,
  REMOVE_ITEM,
} from "./actions";
import { rootReducer } from "./reducers";

export interface AddTodoAction {
  type: typeof ADD_ITEM;
  id: string;
  title: string;
  description: string;
  dueDate: Date;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_ITEM;
  id: string;
}

export interface CompleteTodoAction {
  type: typeof TOGGLE_TODO;
  id: string;
}

export interface TodoModel {
  id: string;
  title: string;
  description: string;
  dueDate?: Date;
  completed: boolean;
}

export type TodoActionTypes =
  | AddTodoAction
  | CompleteTodoAction
  | RemoveTodoAction;

export type RootState = ReturnType<typeof rootReducer>;
