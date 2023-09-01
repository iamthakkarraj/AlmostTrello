import { TodoActionTypes, WorkspaceActionType } from "./types";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const TOGGLE_TODO = "MARK_COMPLETE";
export const FILTER_ALL = "FILTER_ALL";
export const FILTER_ACTIVE = "FILTER_ACTIVE";
export const FILTER_COMPLETE = "FILTER_COMPLETE";
export const ADD_WORKSPACE = "ADD_WORKSPACE";
export const REMOVE_WORKSPACE = "REMOVE_WORKSPACE";
export const SET_WORKSPACE_FILTER = "SET_WORKSPACE_FILTER";

export const addItem = (item: {
  text: string;
  workspaceId: number;
}): TodoActionTypes => ({
  type: ADD_ITEM,
  todoId: Date.now(),
  workspaceId: item.workspaceId,
  text: item.text,
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  id,
});

export const removeItem = (id: number): TodoActionTypes => ({
  type: REMOVE_ITEM,
  id,
});

export const setFilter = (filter: string, id: number): WorkspaceActionType => ({
  type: SET_WORKSPACE_FILTER,
  value: filter,
  workspaceId: id,
});

export const addWorkspace = (title: string): WorkspaceActionType => ({
  type: ADD_WORKSPACE,
  id: Date.now(),
  title,
});

export const removeWorkspace = (id: number): WorkspaceActionType => ({
  type: REMOVE_WORKSPACE,
  id: id,
});
