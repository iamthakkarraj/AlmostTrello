import {
  ADD_ITEM,
  TOGGLE_TODO,
  SET_WORKSPACE_FILTER,
  REMOVE_ITEM,
  ADD_WORKSPACE,
  REMOVE_WORKSPACE,
} from "./actions";
import { rootReducer } from "./reducers";

export interface AddTodoAction {
  type: typeof ADD_ITEM;
  todoId: number
  workspaceId: number;
  text: string;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_ITEM;
  id: number;
}

export interface CompleteTodoAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

export interface SetWorkspaceFilterAction {
  type: typeof SET_WORKSPACE_FILTER;
  value: string;
  workspaceId: number
}

export interface TodoModel {
  id: number;
  text: string;
  createdDate: Date;
  completed: boolean;
  completedDate?: Date;
  workspaceId: number;
}

export interface WorkspaceModel {
  id: number;
  title: string;
  filter: string;
}

export interface AddWorkspace {
  type: typeof ADD_WORKSPACE;
  id: number;
  title: string;
}

export interface RemoveWorkspace {
  type: typeof REMOVE_WORKSPACE;
  id: number;
}

export type WorkspaceActionType = AddWorkspace | RemoveWorkspace | SetWorkspaceFilterAction;

export type TodoActionTypes =
  | AddTodoAction
  | CompleteTodoAction
  | RemoveTodoAction;

export type RootState = ReturnType<typeof rootReducer>;
